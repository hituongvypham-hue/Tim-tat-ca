# Troubleshooting Guide: Google Drive Sync & Script Execution

## Issue: `signInGoogle is not defined`
**Symptom**: The "Đăng nhập Google" button does nothing when clicked. The browser console shows `ReferenceError: signInGoogle is not defined`.
**Context**: The function is clearly present in the source code but not accessible at runtime.

### Root Cause
**Monolithic Script Blocking**:
The application relies on a single, massive `index.html` file with a `<script>` tag exceeding 15,000 lines.
If a **SyntaxError** or **RuntimeError** occurs anywhere in this script *before* the Google Drive module is defined, the browser stops executing the entire remaining block.
This means the Google Drive module (and its exported functions like `signInGoogle`) never gets initialized.

### The Fix: Script Isolation
To prevent this, we must **isolate** critical modules into their own `<script>` tags.

#### Implementation Pattern
Instead of:
```html
<script>
    // 10,000 lines of app code...
    // [ERROR HERE] -> Stops everything below

    // Google Drive Module
    window.signInGoogle = ... // Never reached
</script>
```

Use:
```html
<script>
    // Main App Code
    // [ERROR HERE] -> Stops this script block only
</script>

<!-- Isolated Module: Safe from errors above -->
<script>
    setTimeout(() => {
        try {
            // Google Drive Module
            window.signInGoogle = ... // Always executes
        } catch (e) {
            console.error(e);
        }
    }, 0);
</script>
```

### Future Prevention Checklist
1.  **Avoid Monoliths**: Whenever possible, break `index.html` into separate `.js` files.
2.  **Critical Features Isolation**: If using a single file, always wrap critical independent features (like Auth, Sync, payments) in their own `<script>` tags.
3.  **Defensive Loading**: Use `try-catch` blocks around top-level module initializations.
4.  **Debugging**: If a function is "undefined" despite being in the code, check for errors *preceding* its definition in the same script block.
