/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Recipe } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function UiEditRecipe(props) {
  const { rcp, overrides, ...rest } = props;
  const [
    textFieldThreeOneFiveTwoTwoEightThreeSevenValue,
    setTextFieldThreeOneFiveTwoTwoEightThreeSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFiveTwoTwoEightThreeEightValue,
    setTextFieldThreeOneFiveTwoTwoEightThreeEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFiveTwoTwoEightThreeNineValue,
    setTextFieldThreeOneFiveTwoTwoEightThreeNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFiveTwoTwoEightFourZeroValue,
    setTextFieldThreeOneFiveTwoTwoEightFourZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFiveTwoTwoEightFourOneValue,
    setTextFieldThreeOneFiveTwoTwoEightFourOneValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      rName: textFieldThreeOneFiveTwoTwoEightThreeSevenValue,
      rDesc: textFieldThreeOneFiveTwoTwoEightThreeEightValue,
      rRating: textFieldThreeOneFiveTwoTwoEightThreeNineValue,
      rPrice: textFieldThreeOneFiveTwoTwoEightFourZeroValue,
      rUrl: textFieldThreeOneFiveTwoTwoEightFourOneValue,
    },
    id: rcp?.id,
    model: Recipe,
    schema: schema,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldThreeOneFiveTwoTwoEightThreeSevenValue === "" &&
      rcp !== undefined &&
      rcp?.rName !== undefined
    )
      setTextFieldThreeOneFiveTwoTwoEightThreeSevenValue(rcp?.rName);
  }, [rcp]);
  useEffect(() => {
    if (
      textFieldThreeOneFiveTwoTwoEightThreeEightValue === "" &&
      rcp !== undefined &&
      rcp?.rDesc !== undefined
    )
      setTextFieldThreeOneFiveTwoTwoEightThreeEightValue(rcp?.rDesc);
  }, [rcp]);
  useEffect(() => {
    if (
      textFieldThreeOneFiveTwoTwoEightThreeNineValue === "" &&
      rcp !== undefined &&
      rcp?.rRating !== undefined
    )
      setTextFieldThreeOneFiveTwoTwoEightThreeNineValue(rcp?.rRating);
  }, [rcp]);
  useEffect(() => {
    if (
      textFieldThreeOneFiveTwoTwoEightFourZeroValue === "" &&
      rcp !== undefined &&
      rcp?.rPrice !== undefined
    )
      setTextFieldThreeOneFiveTwoTwoEightFourZeroValue(rcp?.rPrice);
  }, [rcp]);
  useEffect(() => {
    if (
      textFieldThreeOneFiveTwoTwoEightFourOneValue === "" &&
      rcp !== undefined &&
      rcp?.rUrl !== undefined
    )
      setTextFieldThreeOneFiveTwoTwoEightFourOneValue(rcp?.rUrl);
  }, [rcp]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UiEditRecipe")}
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
            children={rcp?.id}
            {...getOverrideProps(overrides, "Edit Recipe")}
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
          {...getOverrideProps(overrides, "Divider31522835")}
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
            value={textFieldThreeOneFiveTwoTwoEightThreeSevenValue}
            onChange={(event) => {
              setTextFieldThreeOneFiveTwoTwoEightThreeSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31522837")}
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
            value={textFieldThreeOneFiveTwoTwoEightThreeEightValue}
            onChange={(event) => {
              setTextFieldThreeOneFiveTwoTwoEightThreeEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31522838")}
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
            value={textFieldThreeOneFiveTwoTwoEightThreeNineValue}
            onChange={(event) => {
              setTextFieldThreeOneFiveTwoTwoEightThreeNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31522839")}
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
            value={textFieldThreeOneFiveTwoTwoEightFourZeroValue}
            onChange={(event) => {
              setTextFieldThreeOneFiveTwoTwoEightFourZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31522840")}
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
            value={textFieldThreeOneFiveTwoTwoEightFourOneValue}
            onChange={(event) => {
              setTextFieldThreeOneFiveTwoTwoEightFourOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31522841")}
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
          {...getOverrideProps(overrides, "Divider31522842")}
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
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
