/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import type { IData, IURLs } from '~/routes/my-page/$nickname/profile/setting';
import { OutputURLImg } from './output-url-img';

interface IURL {
  register: UseFormRegister<IData>;
  fields: any;
  append: any;
  remove: any;
  urls: IURLs[];
  setUrls: any;
  URLImages: any;
}

export const Url = ({
  register,
  fields,
  append,
  remove,
  urls,
  setUrls,
  URLImages,
}: IURL) => {
  const content = fields.map((field: any, index: number) => {
    const { id } = field;
    const value = urls[index];
    return (
      <Component key={id}>
        <URLs>
          <URLImgBox
            onClick={() => {
              const temp: IURLs[] = JSON.parse(JSON.stringify(urls));
              temp[index] = {
                isTrue: !value.isTrue,
                nowURLImage: temp[index].nowURLImage,
              };
              setUrls(temp);
            }}
          >
            <URLImg src={value.nowURLImage.iconUrl} alt='icon' />
            <URLImgRotate
              isGood={value.isTrue}
              src='/icons/my-page/arrow.svg'
              alt='temp'
            />
          </URLImgBox>
          <InputURL
            className='body3_SB'
            {...register(`URL.${index}.adress`)}
            placeholder='https://'
          />
          <Delete
            className='caption1_SB'
            onClick={() => {
              const temp: IURLs[] = JSON.parse(JSON.stringify(urls));
              if (temp.length !== 1) {
                remove(index);
                temp.splice(index, 1);
                setUrls(temp);
              }
            }}
          >
            삭제하기
          </Delete>
        </URLs>
        <OutputURLImg
          image={URLImages}
          isGood={value.isTrue}
          urls={JSON.parse(JSON.stringify(urls))}
          setURLs={setUrls}
          index={index}
        />
      </Component>
    );
  });

  return (
    <div>
      <ComponentsFlex>{content}</ComponentsFlex>
      <Add
        className='caption1_SB'
        onClick={() => {
          append({});
          const temp: IURLs[] = JSON.parse(JSON.stringify(urls));
          temp.push({ nowURLImage: URLImages[0], isTrue: true });
          setUrls(temp);
        }}
      >
        + URL 추가하기
      </Add>
    </div>
  );
};
const Component = styled.div`
  position: relative;
`;
const URLs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const InputURL = styled.input`
  width: 332px;
  height: 40px;
  padding: 8px 12px;
  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  &:focus {
    outline: none;
    border: 1px solid ${(prop) => prop.theme.color.primary.blue.blue_500};
  }
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const URLImgBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  width: 64px;
  height: 40px;
  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border: 1px solid ${(props) => props.theme.color.grayScale.gray_200};
  border-radius: 8px;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  cursor: pointer;
`;

const URLImg = styled.img``;
const URLImgRotate = styled.img<{ isGood: boolean }>`
  ${({ isGood }) => isGood && `transform: rotate(-90deg)`}
`;
const Delete = styled.div`
  color: #f5564c;
  cursor: pointer;
`;
const Add = styled.div`
  color: ${(prop) => prop.theme.color.primary.blue.blue_500};
  margin-top: 16px;
  cursor: pointer;
`;
const ComponentsFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
