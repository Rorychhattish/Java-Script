# Deep Retrieval Challenge

## Overview

This challenge demonstrates **recursion** by retrieving a value nested under an unknown number of `prop` properties.

### Example

**Input**

```javascript
{
  prop: {
    prop: {
      prop: 3
    }
  }
}
```

**Output**

```text
3
```

## Solution

```javascript
function deepRetrieval(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    return deepRetrieval(obj.prop);
}
```

## Concepts

- Recursion
- Nested Objects
- Base Case
- Recursive Function