import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import {
  User,
  CreateUserDto,
  UpdateUserDto,
  UserFilters,
  UserListResponse,
  BulkUserOperation,
  UserRole,
  UserStatus,
  Permission,
} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //private apiUrl = '/api/users'; // Replace with your actual API URL
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  // Mock data for demonstration
  private mockUsers: User[] = [];

  constructor() {
    //private _http: HttpClient
    this.initializeMockData();
  }

  /**
   * Get all users with optional filters and pagination
   */
  getUsers(
    filters?: UserFilters,
    page: number = 1,
    pageSize: number = 10,
  ): Observable<UserListResponse> {
    // In production, use HTTP request:
    // let params = new HttpParams()
    //   .set('page', page.toString())
    //   .set('pageSize', pageSize.toString());
    // if (filters) { /* add filter params */ }
    // return this.http.get<UserListResponse>(this.apiUrl, { params });

    // Mock implementation
    return of(this.mockUsers).pipe(
      delay(300),
      map((users) => {
        let filtered = [...users];

        // Apply filters
        if (filters) {
          if (filters.search) {
            const search = filters.search.toLowerCase();
            filtered = filtered.filter(
              (u) =>
                (u.username && u.username.toLowerCase().includes(search)) ||
                (u.email && u.email.toLowerCase().includes(search)) ||
                (u.firstName && u.firstName.toLowerCase().includes(search)) ||
                (u.lastName && u.lastName.toLowerCase().includes(search)),
            );
          }
          if (filters.role) {
            filtered = filtered.filter((u) => u.role === filters.role);
          }
          if (filters.status) {
            filtered = filtered.filter((u) => u.status === filters.status);
          }
          if (filters.department) {
            filtered = filtered.filter((u) => u.department === filters.department);
          }
          if (filters.isActive !== undefined) {
            filtered = filtered.filter((u) => u.isActive === filters.isActive);
          }
        }

        const total = filtered.length;
        const start = (page - 1) * pageSize;
        const paginatedUsers = filtered.slice(start, start + pageSize);

        return {
          users: paginatedUsers,
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize),
        };
      }),
      tap((response) => this.usersSubject.next(response.users)),
    );
  }

  /**
   * Get user by ID
   */
  getUserById(id: string): Observable<User | undefined> {
    // return this.http.get<User>(`${this.apiUrl}/${id}`);
    return of(this.mockUsers.find((u) => u.id === id)).pipe(delay(200));
  }

  /**
   * Create new user
   */
  createUser(userData: CreateUserDto): Observable<User> {
    // return this.http.post<User>(this.apiUrl, userData);

    const newUser: User = {
      id: this.generateId(),
      ...userData,
      fullName: `${userData.firstName} ${userData.lastName}`,
      isEmailVerified: false,
      isPhoneVerified: false,
      twoFactorEnabled: false,
      permissions: this.getDefaultPermissions(userData.role),
      status: UserStatus.ACTIVE,
      isActive: true,
      isLocked: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      failedLoginAttempts: 0,
      preferences: {
        theme: 'light',
        language: 'en',
        timezone: 'UTC',
        notifications: { email: true, push: true, sms: false },
      },
    };

    this.mockUsers.push(newUser);
    return of(newUser).pipe(delay(300));
  }

  /**
   * Update user
   */
  updateUser(id: string, userData: UpdateUserDto): Observable<User> {
    // return this.http.put<User>(`${this.apiUrl}/${id}`, userData);

    const index = this.mockUsers.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.mockUsers[index] = {
        ...this.mockUsers[index],
        ...userData,
        updatedAt: new Date(),
      };
      return of(this.mockUsers[index]).pipe(delay(300));
    }
    throw new Error('User not found');
  }

  /**
   * Delete user
   */
  deleteUser(id: string): Observable<void> {
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);

    const index = this.mockUsers.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.mockUsers.splice(index, 1);
    }
    return of(void 0).pipe(delay(300));
  }

  /**
   * Bulk operations on users
   */
  bulkOperation(operation: BulkUserOperation): Observable<void> {
    // return this.http.post<void>(`${this.apiUrl}/bulk`, operation);

    operation.userIds.forEach((id) => {
      const user = this.mockUsers.find((u) => u.id === id);
      if (user) {
        switch (operation.operation) {
          case 'activate':
            user.isActive = true;
            user.status = UserStatus.ACTIVE;
            break;
          case 'deactivate':
            user.isActive = false;
            user.status = UserStatus.INACTIVE;
            break;
          case 'delete':
            const index = this.mockUsers.indexOf(user);
            this.mockUsers.splice(index, 1);
            break;
          case 'lock':
            user.isLocked = true;
            break;
          case 'unlock':
            user.isLocked = false;
            break;
          case 'assign_role':
            if (operation.data?.role) {
              user.role = operation.data.role;
            }
            break;
        }
      }
    });

    return of(void 0).pipe(delay(300));
  }

  /**
   * Change user password
   */
  changePassword(_userId: string, _oldPassword: string, _newPassword: string): Observable<void> {
    // return this.http.post<void>(`${this.apiUrl}/${userId}/change-password`, { oldPassword, newPassword });
    return of(void 0).pipe(delay(300));
  }

  /**
   * Reset user password (admin)
   */
  resetPassword(_userId: string): Observable<{ temporaryPassword: string }> {
    // return this.http.post<{ temporaryPassword: string }>(`${this.apiUrl}/${userId}/reset-password`, {});
    return of({ temporaryPassword: 'Temp@123' }).pipe(delay(300));
  }

  /**
   * Lock/Unlock user account
   */
  toggleLockUser(userId: string, lock: boolean, reason?: string): Observable<void> {
    // return this.http.post<void>(`${this.apiUrl}/${userId}/lock`, { lock, reason });

    const user = this.mockUsers.find((u) => u.id === userId);
    if (user) {
      user.isLocked = lock;
      user.lockReason = reason;
    }
    return of(void 0).pipe(delay(300));
  }

  /**
   * Export users to CSV/Excel
   */
  exportUsers(_format: 'csv' | 'excel', _filters?: UserFilters): Observable<Blob> {
    // return this.http.post(`${this.apiUrl}/export`, { format, filters }, { responseType: 'blob' });

    // Mock CSV export
    const csv = this.generateCSV(this.mockUsers);
    const blob = new Blob([csv], { type: 'text/csv' });
    return of(blob).pipe(delay(500));
  }

  /**
   * Import users from file
   */
  importUsers(_file: File): Observable<{ success: number; failed: number; errors: string[] }> {
    // const formData = new FormData();
    // formData.append('file', file);
    // return this.http.post<ImportResult>(`${this.apiUrl}/import`, formData);

    return of({
      success: 10,
      failed: 2,
      errors: ['Row 5: Invalid email', 'Row 8: Duplicate username'],
    }).pipe(delay(1000));
  }

  /**
   * Get user activity log
   */
  getUserActivityLog(_userId: string, _page: number = 1, _pageSize: number = 20): Observable<any> {
    // return this.http.get(`${this.apiUrl}/${userId}/activity`, { params: { page, pageSize } });
    return of({
      activities: [
        { action: 'login', timestamp: new Date(), ip: '192.168.1.1' },
        { action: 'profile_update', timestamp: new Date(), ip: '192.168.1.1' },
      ],
      total: 2,
    }).pipe(delay(300));
  }

  /**
   * Send verification email
   */
  sendVerificationEmail(_userId: string): Observable<void> {
    // return this.http.post<void>(`${this.apiUrl}/${userId}/send-verification`, {});
    return of(void 0).pipe(delay(300));
  }

  /**
   * Get user statistics
   */
  getUserStatistics(): Observable<any> {
    // return this.http.get(`${this.apiUrl}/statistics`);

    return of({
      total: this.mockUsers.length,
      active: this.mockUsers.filter((u) => u.isActive).length,
      inactive: this.mockUsers.filter((u) => !u.isActive).length,
      locked: this.mockUsers.filter((u) => u.isLocked).length,
      byRole: {
        [UserRole.SUPER_ADMIN]: this.mockUsers.filter((u) => u.role === UserRole.SUPER_ADMIN)
          .length,
        [UserRole.ADMIN]: this.mockUsers.filter((u) => u.role === UserRole.ADMIN).length,
        [UserRole.MANAGER]: this.mockUsers.filter((u) => u.role === UserRole.MANAGER).length,
        [UserRole.USER]: this.mockUsers.filter((u) => u.role === UserRole.USER).length,
      },
      recentSignups: this.mockUsers.slice(-7).length,
    }).pipe(delay(300));
  }

  // Helper methods
  private generateId(): string {
    return 'user_' + Math.random().toString(36).substr(2, 9);
  }

  private getDefaultPermissions(role: UserRole): Permission[] {
    switch (role) {
      case UserRole.SUPER_ADMIN:
        return Object.values(Permission);
      case UserRole.ADMIN:
        return [
          Permission.USER_CREATE,
          Permission.USER_READ,
          Permission.USER_UPDATE,
          Permission.USER_DELETE,
          Permission.REPORTS_VIEW,
          Permission.REPORTS_EXPORT,
        ];
      case UserRole.MANAGER:
        return [Permission.USER_READ, Permission.REPORTS_VIEW];
      default:
        return [Permission.USER_READ];
    }
  }

  private generateCSV(users: User[]): string {
    const headers = [
      'ID',
      'Username',
      'Email',
      'First Name',
      'Last Name',
      'Role',
      'Status',
      'Created At',
    ];
    const rows = users.map((u) => [
      u.id,
      u.username,
      u.email,
      u.firstName,
      u.lastName,
      u.role,
      u.status,
      u.createdAt.toISOString(),
    ]);

    return [headers, ...rows].map((row) => row.join(',')).join('\n');
  }

  private initializeMockData(): void {
    this.mockUsers = [
      {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
        fullName: 'Admin User',
        avatar: 'https://i.pravatar.cc/150?img=1',
        phone: '+1234567890',
        role: UserRole.SUPER_ADMIN,
        permissions: Object.values(Permission),
        status: UserStatus.ACTIVE,
        isActive: true,
        isLocked: false,
        isEmailVerified: true,
        isPhoneVerified: true,
        twoFactorEnabled: true,
        department: 'IT',
        jobTitle: 'System Administrator',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date(),
        lastLoginAt: new Date(),
        failedLoginAttempts: 0,
        preferences: {
          theme: 'dark',
          language: 'en',
          timezone: 'UTC',
          notifications: { email: true, push: true, sms: true },
        },
      },
      // Add more mock users as needed
    ];

    // Generate more mock users
    for (let i = 2; i <= 50; i++) {
      this.mockUsers.push(this.generateMockUser(i));
    }
  }

  private generateMockUser(index: number): User {
    const roles = [UserRole.USER, UserRole.MANAGER, UserRole.ADMIN];
    const statuses = [UserStatus.ACTIVE, UserStatus.INACTIVE, UserStatus.PENDING];
    const departments = ['IT', 'HR', 'Sales', 'Marketing', 'Finance'];

    return {
      id: index.toString(),
      username: `user${index}`,
      email: `user${index}@example.com`,
      firstName: `First${index}`,
      lastName: `Last${index}`,
      fullName: `First${index} Last${index}`,
      avatar: `https://i.pravatar.cc/150?img=${index}`,
      phone: `+1234567${String(index).padStart(3, '0')}`,
      role: roles[index % roles.length],
      permissions: this.getDefaultPermissions(roles[index % roles.length]),
      status: statuses[index % statuses.length],
      isActive: index % 3 !== 0,
      isLocked: index % 10 === 0,
      isEmailVerified: index % 2 === 0,
      isPhoneVerified: index % 3 === 0,
      twoFactorEnabled: index % 5 === 0,
      department: departments[index % departments.length],
      jobTitle: `Position ${index}`,
      createdAt: new Date(2024, 0, index),
      updatedAt: new Date(),
      failedLoginAttempts: 0,
      preferences: {
        theme: 'light',
        language: 'en',
        timezone: 'UTC',
        notifications: { email: true, push: false, sms: false },
      },
    };
  }
}



