export const formatDate = (dateStr: string, timeStr: string): string => {
  const [hour, minute] = timeStr.split(':');
  const [year, month, day] = dateStr.split('-');
  
  // Create date object in local timezone
  const date = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour || '0'),
    parseInt(minute || '0')
  );
  
  // Format date to show day, month, date and year
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  // Format time in 12-hour format with AM/PM
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  
  return `${formattedDate} at ${formattedTime}`;
};

export const isMatchToday = (dateStr: string): boolean => {
  const today = new Date();
  const matchDate = new Date(dateStr);
  
  return (
    today.getFullYear() === matchDate.getFullYear() &&
    today.getMonth() === matchDate.getMonth() &&
    today.getDate() === matchDate.getDate()
  );
};

export const isMatchTomorrow = (dateStr: string): boolean => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const matchDate = new Date(dateStr);
  
  return (
    tomorrow.getFullYear() === matchDate.getFullYear() &&
    tomorrow.getMonth() === matchDate.getMonth() &&
    tomorrow.getDate() === matchDate.getDate()
  );
};

export const getRelativeDate = (dateStr: string): string => {
  if (isMatchToday(dateStr)) return 'Today';
  if (isMatchTomorrow(dateStr)) return 'Tomorrow';
  
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
};