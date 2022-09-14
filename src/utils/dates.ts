import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function getTimeAgo(date: Date) {
  return dayjs(date).fromNow();
}
