import axios from 'axios';
import { atom, selectorFamily } from 'recoil';
import { lessonAddress } from '~/data/constants/adress';
import type { IProblems } from '~/models/problem-and-solution/problem/problems';

export const ProblemCategoryId = atom<string>({
  key: 'ProblemCategoryId',
  default: 'createdAt',
});

export const numOfProblems = atom<number>({
  key: 'numOfProblems',
  default: 0,
});

export const getProblems = selectorFamily<IProblems[], string>({
  key: 'getLesson',
  get: (sortBy: string) => async () => {
    const userData = await axios
      .get(`${lessonAddress}?sortBy=${sortBy}`)
      .then((response) => {
        return response.data.lessons;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
export const getProblemsById = selectorFamily<IProblems[], number>({
  key: 'getLesson',
  get: (id: number) => async () => {
    const userData = await axios
      .get(`${lessonAddress}?categoryId=${id}`)
      .then((response) => {
        return response.data.lessons;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
/* https://api.thepool.kr/api/lessons?bookmarkedMemberId=1 */
export const getBookmarkedProblemList = selectorFamily<IProblems[], number>({
  key: 'getLesson',
  get: (id: number) => async () => {
    const userData = await axios
      .get(`${lessonAddress}?bookmarkedMemberId=${id}`)
      .then((response) => {
        return response.data.lessons;
      })
      .catch(() => {
        return false;
      });
    return userData;
  },
});
