export const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };
  