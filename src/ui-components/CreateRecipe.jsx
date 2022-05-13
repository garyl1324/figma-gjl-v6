/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Recipe } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function CreateRecipe(props) {
  const { recipe, overrides, ...rest } = props;
  const [
    textFieldThreeZeroEightZeroTwoSevenEightSevenValue,
    setTextFieldThreeZeroEightZeroTwoSevenEightSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroEightZeroTwoSevenEightEightValue,
    setTextFieldThreeZeroEightZeroTwoSevenEightEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroEightZeroTwoSevenEightNineValue,
    setTextFieldThreeZeroEightZeroTwoSevenEightNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroEightZeroTwoEightFourEightValue,
    setTextFieldThreeZeroEightZeroTwoEightFourEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroEightZeroTwoEightFiveFiveValue,
    setTextFieldThreeZeroEightZeroTwoEightFiveFiveValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      rName: textFieldThreeZeroEightZeroTwoSevenEightSevenValue,
      rDesc: textFieldThreeZeroEightZeroTwoSevenEightEightValue,
      rRating: textFieldThreeZeroEightZeroTwoSevenEightNineValue,
      rPrice: textFieldThreeZeroEightZeroTwoEightFourEightValue,
      rUrl: textFieldThreeZeroEightZeroTwoEightFiveFiveValue,
    },
    model: Recipe,
    schema: schema,
  });
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateRecipe")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Recipe"
            {...getOverrideProps(overrides, "Create Recipe")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider30802782")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="name"
            placeholder="name of your recipe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightZeroTwoSevenEightSevenValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightZeroTwoSevenEightSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30802787")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="description"
            placeholder="description of your recipe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightZeroTwoSevenEightEightValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightZeroTwoSevenEightEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30802788")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="rating"
            placeholder="0.0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightZeroTwoSevenEightNineValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightZeroTwoSevenEightNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30802789")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="price"
            placeholder="00.00"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightZeroTwoEightFourEightValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightZeroTwoEightFourEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30802848")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="image url"
            placeholder="https://yourlink.jpg"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightZeroTwoEightFiveFiveValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightZeroTwoEightFiveFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30802855")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider30802790")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseOut={() => {
            buttonOnMouseOut();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
