const cloneObj = (oldObject,updatedProps) => {
  return {
      ...oldObject,
      ...updatedProps
  };
};

export {
  cloneObj,
};

