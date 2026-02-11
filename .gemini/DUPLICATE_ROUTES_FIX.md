# Duplicate Routes Found in app.routes.ts

## Duplicate in `/demos` section:

**`set-tree`** appears TWICE:

1. Line 70-73 (first occurrence - KEEP THIS)
2. Line 121-125 (second occurrence - **REMOVE THIS**)

## How to Fix:

Delete lines 121-125:

```typescript
      {
        path: 'set-tree',
        loadComponent: () =>
          import('./demos/set-tree/set-tree-demo.component').then((m) => m.SetTreeDemoComponent),
      },
```

## Note:

- The `/docs` section does NOT have this duplicate
- Only the `/demos` section has the duplicate `set-tree` route
- Keep the first occurrence (line 70-73) and remove the second (line 121-125)

## Manual Fix Required:

Please manually delete lines 121-125 from `app.routes.ts` to remove the duplicate.
