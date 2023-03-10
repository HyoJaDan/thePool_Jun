import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { submitServiceProvider } from '~/recoils/unused/submit-service';

export function useHotSubmits() {
  const service = useRecoilValue(submitServiceProvider);
  const hotSubmitsData = useQuery('hotSubmits', service.getHotSubmits);
  return hotSubmitsData.data;
}
