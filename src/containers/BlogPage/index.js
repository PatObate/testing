import React from "react";
import {
  BlogPageContainer,
  BlogPageP,
  BlogPageRow1,
  BlogPageRow2,
  BlogPageRow3,
  BlogPageTop,
  BlogPageTopBold,
  BlogPageWrapper,
  CardHeader,
  Date,
  FormContainer,
  FormHeader,
  Input,
  InputBig,
  InputColumn,
  InputContainer,
  Label,
  Line,
  RedTag,
  WordRow,
  RedRow,
  InputLong,
} from "./BlogPageElements";
import Button from "../../components/Button";
import {ButtonText} from "./Data"

const BlogPage = ({
  top,
  topB,
  img,
  red,
  header,
  date,
  content,
  formheader,
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
  label7,
  holder1,
  holder2,
  holder3,
  holder4,
  holder5,
  holder6,
  holder7,
}) => {
  return (
    <>
      <BlogPageContainer>
        <BlogPageWrapper>
          <BlogPageRow1>
            <BlogPageTop>
              {top}
              <BlogPageTopBold>{topB}</BlogPageTopBold>
            </BlogPageTop>
          </BlogPageRow1>
          <BlogPageRow2 style={{ backgroundImage: `url(${img})` }}>
            <RedRow>
              <RedTag>{red}</RedTag>
            </RedRow>
            <WordRow>
              <CardHeader>{header}</CardHeader>
              <Line />
              <Date>{date}</Date>
            </WordRow>
          </BlogPageRow2>
          <BlogPageRow3>
            <BlogPageP>{content}</BlogPageP>
            <FormContainer>
              <FormHeader>{formheader}</FormHeader>
              <InputContainer>
                <InputColumn>
                  <Label>{label1}</Label>
                  <Input type="text" placeholder={holder1} />
                  <Label>{label2}</Label>
                  <Input type="text" placeholder={holder2} />
                </InputColumn>
                <InputColumn>
                  <Label>{label3}</Label>
                  <Input type="text" placeholder={holder3} />
                  <Label>{label4}</Label>
                  <Input type="text" placeholder={holder4} />
                </InputColumn>
                <InputColumn>
                  <Label>{label5}</Label>
                  <InputLong type="text" placeholder={holder5} />
                  <Label>{label6}</Label>
                  <InputLong type="text" placeholder={holder6} />
                </InputColumn>
              </InputContainer>
              <InputColumn>
                <Label>{label7}</Label>
                <InputBig type="text" placeholder={holder7} />
              </InputColumn>
              <Button {...ButtonText} />
            </FormContainer>
          </BlogPageRow3>
        </BlogPageWrapper>
      </BlogPageContainer>
    </>
  );
};

export default BlogPage;
