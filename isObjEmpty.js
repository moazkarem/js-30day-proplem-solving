var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    if (obj.length > 0) {
      return false;
    } else {
      return true;
    }
  } else {
    if (Object.values(obj).length > 0) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(isEmpty([null, false, 0]));
