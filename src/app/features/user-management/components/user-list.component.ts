import { AppCheckboxValueAccessorDirective } from 'src/app/directives/ui-checkbox-value-accessor.directive';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User, UserRole, UserStatus, UserFilters, BulkUserOperation } from '../models/user.model';
import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from 'src/app/directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    AppCheckboxValueAccessorDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUsers: Set<string> = new Set();
  loading = false;

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalUsers = 0;
  totalPages = 0;

  // Filters
  filters: UserFilters = {};
  searchTerm = '';
  selectedRole: UserRole | '' = '';
  selectedStatus: UserStatus | '' = '';
  selectedDepartment = '';

  // View modes
  viewMode: 'table' | 'grid' | 'list' = 'table';

  // Dialogs
  showCreateDialog = false;
  showEditDialog = false;
  showDeleteDialog = false;
  showBulkDialog = false;
  showImportDialog = false;
  showFilterDialog = false;

  // Selected user for operations
  selectedUser: User | null = null;

  // Enums for template
  UserRole = UserRole;
  UserStatus = UserStatus;
  roles = Object.values(UserRole);
  statuses = Object.values(UserStatus);
  departments = ['IT', 'HR', 'Sales', 'Marketing', 'Finance'];

  // Dropdown options
  roleOptions = [
    { label: 'All Roles', value: '' },
    ...Object.values(UserRole).map((r) => ({ label: r, value: r })),
  ];
  statusOptions = [
    { label: 'All Statuses', value: '' },
    ...Object.values(UserStatus).map((s) => ({ label: s, value: s })),
  ];
  departmentOptions = [
    { label: 'All Departments', value: '' },
    { label: 'IT', value: 'IT' },
    { label: 'HR', value: 'HR' },
    { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Finance', value: 'Finance' },
  ];

  // Make Math available to template
  Math = Math;

  // Statistics
  statistics: any = null;

  // Bulk operations
  bulkOperation: 'activate' | 'deactivate' | 'delete' | 'assign_role' | 'lock' | 'unlock' =
    'activate';
  bulkRoleAssignment: UserRole = UserRole.USER;

  constructor(
    private userService: UserService,
    // private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadStatistics();
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getUsers(this.filters, this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.users = response.users;
        this.totalUsers = response.total;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.loading = false;
      },
    });
  }

  loadStatistics(): void {
    this.userService.getUserStatistics().subscribe({
      next: (stats) => {
        this.statistics = stats;
      },
    });
  }

  // Search and Filter
  onSearch(): void {
    this.filters.search = this.searchTerm;
    this.currentPage = 1;
    this.loadUsers();
  }

  onFilterChange(): void {
    this.filters = {
      search: this.searchTerm || undefined,
      role: this.selectedRole || undefined,
      status: this.selectedStatus || undefined,
      department: this.selectedDepartment || undefined,
    };
    this.currentPage = 1;
    this.loadUsers();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedRole = '';
    this.selectedStatus = '';
    this.selectedDepartment = '';
    this.filters = {};
    this.currentPage = 1;
    this.loadUsers();
  }

  // Pagination
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadUsers();
    }
  }

  changePageSize(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.loadUsers();
  }

  // Selection
  toggleSelectUser(userId: string): void {
    if (this.selectedUsers.has(userId)) {
      this.selectedUsers.delete(userId);
    } else {
      this.selectedUsers.add(userId);
    }
  }

  toggleSelectAll(): void {
    if (this.selectedUsers.size === this.users.length) {
      this.selectedUsers.clear();
    } else {
      this.users.forEach((user) => this.selectedUsers.add(user.id));
    }
  }

  isSelected(userId: string): boolean {
    return this.selectedUsers.has(userId);
  }

  // CRUD Operations
  openCreateDialog(): void {
    this.showCreateDialog = true;
  }

  openEditDialog(user: User): void {
    this.selectedUser = user;
    this.showEditDialog = true;
  }

  openDeleteDialog(user: User): void {
    this.selectedUser = user;
    this.showDeleteDialog = true;
  }

  deleteUser(): void {
    if (this.selectedUser) {
      this.userService.deleteUser(this.selectedUser.id).subscribe({
        next: () => {
          this.showDeleteDialog = false;
          this.loadUsers();
          this.loadStatistics();
        },
      });
    }
  }

  // Bulk Operations
  openBulkDialog(): void {
    if (this.selectedUsers.size > 0) {
      this.showBulkDialog = true;
    }
  }

  executeBulkOperation(): void {
    const operation: BulkUserOperation = {
      userIds: Array.from(this.selectedUsers),
      operation: this.bulkOperation,
      data: this.bulkOperation === 'assign_role' ? { role: this.bulkRoleAssignment } : undefined,
    };

    this.userService.bulkOperation(operation).subscribe({
      next: () => {
        this.showBulkDialog = false;
        this.selectedUsers.clear();
        this.loadUsers();
        this.loadStatistics();
      },
    });
  }

  // User Actions
  toggleUserStatus(user: User): void {
    const newStatus = user.isActive ? UserStatus.INACTIVE : UserStatus.ACTIVE;
    this.userService
      .updateUser(user.id, { status: newStatus, isActive: !user.isActive })
      .subscribe(() => this.loadUsers());
  }

  lockUser(user: User): void {
    this.userService
      .toggleLockUser(user.id, true, 'Locked by admin')
      .subscribe(() => this.loadUsers());
  }

  unlockUser(user: User): void {
    this.userService.toggleLockUser(user.id, false).subscribe(() => this.loadUsers());
  }

  resetPassword(user: User): void {
    this.userService.resetPassword(user.id).subscribe({
      next: (result) => {
        alert(`Temporary password: ${result.temporaryPassword}`);
      },
    });
  }

  sendVerificationEmail(user: User): void {
    this.userService.sendVerificationEmail(user.id).subscribe({
      next: () => {
        alert('Verification email sent!');
      },
    });
  }

  // Import/Export
  exportUsers(format: 'csv' | 'excel'): void {
    this.userService.exportUsers(format, this.filters).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `users.${format}`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.userService.importUsers(file).subscribe({
        next: (result) => {
          alert(`Import complete! Success: ${result.success}, Failed: ${result.failed}`);
          this.loadUsers();
          this.showImportDialog = false;
        },
      });
    }
  }

  // View Mode
  setViewMode(mode: 'table' | 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  // Utility
  getRoleBadgeClass(role: UserRole): string {
    const classes: Record<UserRole, string> = {
      [UserRole.SUPER_ADMIN]: 'badge-danger',
      [UserRole.ADMIN]: 'badge-warning',
      [UserRole.MANAGER]: 'badge-info',
      [UserRole.USER]: 'badge-success',
      [UserRole.GUEST]: 'badge-secondary',
    };
    return classes[role] || 'badge-secondary';
  }

  getStatusBadgeClass(status: UserStatus): string {
    const classes: Record<UserStatus, string> = {
      [UserStatus.ACTIVE]: 'badge-success',
      [UserStatus.INACTIVE]: 'badge-secondary',
      [UserStatus.PENDING]: 'badge-warning',
      [UserStatus.SUSPENDED]: 'badge-danger',
      [UserStatus.DELETED]: 'badge-dark',
    };
    return classes[status] || 'badge-secondary';
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(this.totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
}

