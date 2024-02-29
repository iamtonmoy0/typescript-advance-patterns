const predicate = (value: string | undefined): value is string => {
  if (value) return "hello";
};
