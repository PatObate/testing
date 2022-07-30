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
  BlogPageContainer2,
  BlogPageNav,
  BlogLeft,
  NavTextSmall,
  BlogRight,
  NavTextBig,
  BlogPageContainer3,
  BlogCardContainer,
  RedRow2,
  RedTag2,
  WordRow2,
  CardHeader2,
  Line2,
  NavTextSmall2,
  BlogPageNav2,
} from "./BlogPageElements";
import Button from "../../components/Button";
import { ButtonText } from "./Data";
import FormMob2 from "../../components/Form/index3";

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
  img2,
  red2,
  cardHeader2,
  date2,
  img3,
  prev,
  next,
  red3,
  cardHeader3,
  date3,
  link1,
  link2,
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
                  <Input type="date" placeholder={holder2} />
                </InputColumn>
                <InputColumn>
                  <Label>{label3}</Label>
                  <Input type="text" placeholder={holder3} />
                  <Label>{label4}</Label>
                  <Input type="time" placeholder={holder4} />
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
            <FormMob2 />
          </BlogPageRow3>
          <BlogPageRow3>
            <BlogPageContainer2>
              <BlogPageNav to={link1}>
                <BlogLeft />
                <div>
                  <NavTextSmall>Previous</NavTextSmall>
                  <NavTextBig>{prev}</NavTextBig>
                </div>
              </BlogPageNav>
              <BlogPageNav2 to={link2}>
                <div>
                  <NavTextSmall2>Next</NavTextSmall2>
                  <NavTextBig>{next}</NavTextBig>
                </div>
                <BlogRight />
              </BlogPageNav2>
            </BlogPageContainer2>
          </BlogPageRow3>
          <BlogPageRow3>
            <BlogPageContainer3>
              <BlogCardContainer
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7315301120448179) 0%, rgba(255,255,255,0.1516981792717087) 100%), url(${img2})`,
                }}
                to={link1}
              >
                <RedRow2>
                  <RedTag2>{red2}</RedTag2>
                </RedRow2>
                <WordRow2>
                  <CardHeader2>{cardHeader2}</CardHeader2>
                  <Line2 />
                  <Date>{date2}</Date>
                </WordRow2>
              </BlogCardContainer>
              <BlogCardContainer
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7315301120448179) 0%, rgba(255,255,255,0.1516981792717087) 100%), url(${img3})`,
                }}
                to={link2}
              >
                <RedRow2>
                  <RedTag2>{red3}</RedTag2>
                </RedRow2>
                <WordRow2>
                  <CardHeader2>{cardHeader3}</CardHeader2>
                  <Line2 />
                  <Date>{date3}</Date>
                </WordRow2>
              </BlogCardContainer>
            </BlogPageContainer3>
          </BlogPageRow3>
        </BlogPageWrapper>
      </BlogPageContainer>
    </>
  );
};

export default BlogPage;
