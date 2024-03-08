# 🐞 Debugging: Suspense boundary received an update before it finished hydrating

## ⚠️ Too many updates at once

When I added the filter element to the menu, the error “**This Suspense boundary received an update before it finished hydrating” appeared. I realized this was due to various elements updating at the same time: when the state of the filter changed, it sent an update to the store. A rerender was then triggered, which caused other properties in the store to be updated: the current number of projects displayed on the All Projects page, as well as the number of Articles displayed on the all Articles page. This updates the menu, which uses this value to display how many articles and projects are currently visible in the subpages.**

## 🤝 Merging the store updates

Triggering 2 different updates for the store simultaneously can cause bugs, especially when the elements triggering those updates are rerendered after the updates happen. To solve this, I merged the 2 events into 1, and now the number of projects, articles, and selected skills are all updated simultaneously, in the SearchBar component. This solved the issue.

Here is the original error message:

## **Unhandled Runtime Error**

**Error: This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.**

## **Call Stack**

### **updateDehydratedSuspenseComponent**

node_modules\react-dom\cjs\react-dom.development.js (20702:0)

### **updateSuspenseComponent**

node_modules\react-dom\cjs\react-dom.development.js (20362:0)

### **beginWork**

node_modules\react-dom\cjs\react-dom.development.js (21624:0)

### **beginWork$1**

node_modules\react-dom\cjs\react-dom.development.js (27426:0)

### **performUnitOfWork**

node_modules\react-dom\cjs\react-dom.development.js (26557:0)

### **workLoopSync**

node_modules\react-dom\cjs\react-dom.development.js (26466:0)

### **renderRootSync**

node_modules\react-dom\cjs\react-dom.development.js (26434:0)

### **performSyncWorkOnRoot**

node_modules\react-dom\cjs\react-dom.development.js (26085:0)

### **flushSyncCallbacks**

node_modules\react-dom\cjs\react-dom.development.js (12042:0)

### **flushPassiveEffectsImpl**

node_modules\react-dom\cjs\react-dom.development.js (27060:0)

### **flushPassiveEffects**

node_modules\react-dom\cjs\react-dom.development.js (26984:0)

### **eval**

node_modules\react-dom\cjs\react-dom.development.js (26769:0)

### **workLoop**

node_modules\react-dom\node_modules\scheduler\cjs\scheduler.development.js (266:0)

### **flushWork**

node_modules\react-dom\node_modules\scheduler\cjs\scheduler.development.js (239:0)

### **performWorkUntilDeadline**

node_modules\react-dom\node_modules\scheduler\cjs\scheduler.development.js (533:0)

### **run**

chrome-extension://aiifbnbfobpmeekipheeijimdpnlpgpp/inpage.js (146994:13)

### **runIfPresent**

chrome-extension://aiifbnbfobpmeekipheeijimdpnlpgpp/inpage.js (147023:21)

### **onGlobalMessage**

chrome-extension://aiifbnbfobpmeekipheeijimdpnlpgpp/inpage.js (147063:17)
