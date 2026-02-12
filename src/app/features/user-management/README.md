# 👥 User Management System

A comprehensive, feature-rich user management system built with Angular 18+. This module provides complete CRUD operations, advanced filtering, bulk actions, role-based access control, and much more.

## 🚀 Features

### Core Functionality

- ✅ **Complete CRUD Operations** - Create, Read, Update, Delete users
- ✅ **Advanced Search & Filtering** - Search by name, email, username with multiple filters
- ✅ **Pagination** - Efficient data loading with customizable page sizes
- ✅ **Multiple View Modes** - Table, Grid, and List views
- ✅ **Bulk Operations** - Perform actions on multiple users simultaneously
- ✅ **Import/Export** - CSV and Excel support for data migration
- ✅ **Real-time Statistics** - Dashboard with user metrics

### User Features

- 👤 **Complete User Profiles**
  - Basic info (name, email, username, phone)
  - Avatar/profile picture
  - Date of birth, gender
  - Address information
  - Job title and department
  - Custom metadata

- 🔐 **Authentication & Security**
  - Email verification status
  - Phone verification status
  - Two-factor authentication toggle
  - Password reset functionality
  - Account locking/unlocking
  - Failed login attempt tracking
  - Last login timestamp

- 🎭 **Role & Permission Management**
  - 5 predefined roles (Super Admin, Admin, Manager, User, Guest)
  - Granular permission system
  - Role-based access control
  - Custom permission assignment

- 📊 **User Status Management**
  - Active/Inactive status
  - Pending verification
  - Suspended accounts
  - Soft delete support

### Advanced Features

#### 1. **Filtering & Search**

- Full-text search across multiple fields
- Filter by role
- Filter by status
- Filter by department
- Filter by active/inactive
- Date range filtering
- Combine multiple filters

#### 2. **Bulk Operations**

- Activate multiple users
- Deactivate multiple users
- Lock/Unlock accounts
- Delete multiple users
- Assign roles in bulk
- Select all/none functionality

#### 3. **Data Import/Export**

- Export to CSV format
- Export to Excel format
- Import from file
- Validation and error reporting
- Success/failure statistics

#### 4. **User Actions**

- Edit user details
- Reset password (admin)
- Send verification email
- Lock/Unlock account
- View activity log
- Change user status
- Assign/modify roles

#### 5. **Statistics Dashboard**

- Total users count
- Active users count
- Inactive users count
- Locked accounts count
- Users by role breakdown
- Recent signups tracking

## 📁 Project Structure

```
src/app/features/user-management/
├── components/
│   ├── user-list.component.ts          # Main list component
│   ├── user-list.component.html        # Template with all views
│   └── user-list.component.scss        # Comprehensive styling
├── services/
│   └── user.service.ts                 # API service with all operations
├── models/
│   └── user.model.ts                   # Interfaces and enums
└── guards/
    └── (future auth guards)
```

## 🎨 UI/UX Features

### Design

- Modern, clean interface
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Intuitive iconography
- Color-coded status badges
- Hover effects and visual feedback

### View Modes

1. **Table View** - Detailed tabular data with sortable columns
2. **Grid View** - Card-based layout with user avatars
3. **List View** - Compact list format

### Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast mode compatible
- Clear visual indicators

## 🔧 Technical Implementation

### Technologies

- **Angular 18+** - Latest Angular framework
- **RxJS** - Reactive programming
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling
- **Standalone Components** - Modern Angular architecture

### Key Components

#### UserService

Comprehensive service providing:

- HTTP operations (with mock data for demo)
- Observable-based data flow
- Error handling
- Data transformation
- Pagination logic
- Filter application

#### User Model

Complete type definitions:

```typescript
interface User {
  id;
  username;
  email;
  firstName;
  lastName;
  avatar;
  phone;
  dateOfBirth;
  gender;
  role;
  permissions;
  department;
  jobTitle;
  status;
  isActive;
  isLocked;
  createdAt;
  updatedAt;
  lastLoginAt;
  address;
  preferences;
  metadata;
  // ... and more
}
```

#### Enums

- **UserRole**: SUPER_ADMIN, ADMIN, MANAGER, USER, GUEST
- **UserStatus**: ACTIVE, INACTIVE, PENDING, SUSPENDED, DELETED
- **Permission**: 15+ granular permissions

## 🚦 Getting Started

### 1. Navigate to User Management

```
http://localhost:4200/user-management
```

### 2. View Users

- See all users in table/grid/list view
- View statistics at the top
- Use filters to narrow down results

### 3. Create User

- Click "Add User" button
- Fill in required fields
- Assign role and permissions
- Save to create

### 4. Edit User

- Click edit icon on any user
- Modify details
- Update role/status
- Save changes

### 5. Bulk Operations

- Select multiple users (checkboxes)
- Choose bulk action
- Confirm operation
- View results

### 6. Import/Export

- Export current view to CSV/Excel
- Import users from file
- View import results

## 📊 Mock Data

The system includes 50 pre-generated mock users for demonstration:

- 1 Super Admin
- Mix of different roles
- Various statuses
- Different departments
- Realistic data (names, emails, avatars)

## 🔐 Permissions System

### Permission Categories

**User Management**

- `user:create` - Create new users
- `user:read` - View user details
- `user:update` - Modify user information
- `user:delete` - Delete users
- `user:manage_roles` - Assign/modify roles
- `user:manage_permissions` - Assign permissions

**Role Management**

- `role:create` - Create new roles
- `role:read` - View roles
- `role:update` - Modify roles
- `role:delete` - Delete roles

**System**

- `system:settings` - Access system settings
- `system:logs` - View system logs
- `system:backup` - Perform backups

**Reports**

- `reports:view` - View reports
- `reports:export` - Export reports

## 🎯 Use Cases

### 1. Admin Dashboard

- View all users at a glance
- Monitor active/inactive accounts
- Track recent signups
- Identify locked accounts

### 2. User Onboarding

- Create new user accounts
- Assign appropriate roles
- Set initial permissions
- Send verification emails

### 3. Account Management

- Update user information
- Change user roles
- Modify permissions
- Lock/unlock accounts

### 4. Bulk Administration

- Activate seasonal employees
- Deactivate departed users
- Reassign roles after reorganization
- Clean up inactive accounts

### 5. Data Migration

- Import users from legacy system
- Export for backup
- Transfer to another platform
- Generate reports

## 🔮 Future Enhancements

Potential additions:

- [ ] User activity timeline
- [ ] Advanced audit logging
- [ ] Custom role creation
- [ ] Permission templates
- [ ] User groups/teams
- [ ] Email notifications
- [ ] Password policy enforcement
- [ ] Session management
- [ ] API key management
- [ ] OAuth integration
- [ ] LDAP/AD integration
- [ ] Multi-tenancy support

## 🛠️ Customization

### Adding New Fields

1. Update `User` interface in `user.model.ts`
2. Add to `CreateUserDto` or `UpdateUserDto`
3. Update form in create/edit dialogs
4. Modify table/grid display

### Adding New Permissions

1. Add to `Permission` enum
2. Update `getDefaultPermissions()` in service
3. Add permission checks in components

### Styling

- Modify `user-list.component.scss`
- Update CSS variables for theming
- Customize badge colors
- Adjust responsive breakpoints

## 📝 API Integration

To connect to a real backend:

1. Update `apiUrl` in `UserService`
2. Replace mock implementations with HTTP calls
3. Handle authentication tokens
4. Add error handling
5. Implement loading states

Example:

```typescript
getUsers(filters, page, pageSize): Observable<UserListResponse> {
  let params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString());

  return this.http.get<UserListResponse>(this.apiUrl, { params });
}
```

## 🎓 Learning Resources

This implementation demonstrates:

- Angular standalone components
- Reactive programming with RxJS
- TypeScript interfaces and enums
- Component communication
- State management
- Form handling
- HTTP services
- Responsive design
- Modern CSS techniques

## 📄 License

This is a demonstration project. Adapt and use as needed for your projects.

## 🤝 Contributing

Feel free to extend this system with additional features:

- Create pull requests
- Report issues
- Suggest enhancements
- Share improvements

---

**Built with ❤️ using Angular**
