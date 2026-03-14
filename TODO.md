# Merge playground-base.scss and playground-common.scss (Option 1)

## Overview

Append playground-common.scss content into playground-base.scss, delete playground-common.scss, and remove @use '../../../../styles/playground-common.scss'; lines from selective playground component SCSS files.

**Status: [0/7] In Progress**

## Steps

- [ ] Step 1: Read open/visible playground SCSS files to confirm @use patterns (carousel, context-menu, dock).
      **Status: [6/7]**
- [x] Step 5: Run `ng build` to check SCSS compilation. ✅ (No errors)
- [ ] Step 6: Test affected playground demos.
- [ ] Step 7: Update status to Complete, attempt_completion.

## Risks

- Missing a @use playground-common in some playground → styles missing (mitigate: search_files post-merge).
