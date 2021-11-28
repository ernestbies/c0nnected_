export const formatData = (date) => {
    const timezoneOffSet = new Date(date).getTimezoneOffset() * 60000;
    return new Date(date - timezoneOffSet).toISOString().slice(0, 19).replace("T", " ");
};
