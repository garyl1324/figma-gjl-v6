/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Recipe(props) {
  const { recipe, overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="351px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Recipe")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="58.33%"
        width="41.67%"
        padding="0px 0px 0px 0px"
        src={recipe?.rUrl}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="41.67%"
        right="0%"
        direction="column"
        width="560px"
        height="351px"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Divider
          width="40px"
          height="1px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="28px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={recipe?.rName}
            {...getOverrideProps(overrides, "Chicken Tikka Masala")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={recipe?.rDesc}
            {...getOverrideProps(
              overrides,
              "Roasted marinated chicken chunks in spiced curry sauce."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="516px"
          height="163px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Bottom Row")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="28.5px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rating")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="22px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              textDecoration="underline"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Rating:"
              {...getOverrideProps(overrides, "Rating:")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="22px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              textDecoration="underline"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={recipe?.rRating}
              {...getOverrideProps(overrides, "4.55")}
            ></Text>
            <Icon
              width="30px"
              height="28.5px"
              viewBox={{ minX: 0, minY: 0, width: 30, height: 28.5 }}
              paths={[
                {
                  d: "M15 22.905L16.0335 21.1927L15 20.5689L13.9665 21.1927L15 22.905ZM24.27 28.5L23.2365 30.2123L27.2945 32.6615L26.2177 28.0456L24.27 28.5ZM21.81 17.955L20.5005 16.4433L19.588 17.2338L19.8623 18.4094L21.81 17.955ZM30 10.86L31.3095 12.3717L34.8923 9.26788L30.1691 8.86716L30 10.86ZM19.215 9.945L17.3736 10.7255L17.8442 11.8359L19.0459 11.9378L19.215 9.945ZM15 0L16.8414 -0.780458L15 -5.1252L13.1586 -0.780458L15 0ZM10.785 9.945L10.9541 11.9378L12.1558 11.8359L12.6264 10.7255L10.785 9.945ZM0 10.86L-0.169073 8.86716L-4.89233 9.26788L-1.30954 12.3717L0 10.86ZM8.19 17.955L10.1377 18.4094L10.412 17.2338L9.49955 16.4433L8.19 17.955ZM5.73 28.5L3.7823 28.0456L2.70547 32.6615L6.76347 30.2123L5.73 28.5ZM13.9665 24.6173L23.2365 30.2123L25.3035 26.7877L16.0335 21.1927L13.9665 24.6173ZM26.2177 28.0456L23.7577 17.5006L19.8623 18.4094L22.3223 28.9544L26.2177 28.0456ZM23.1195 19.4667L31.3095 12.3717L28.6905 9.34835L20.5005 16.4433L23.1195 19.4667ZM30.1691 8.86716L19.3841 7.95216L19.0459 11.9378L29.8309 12.8528L30.1691 8.86716ZM21.0564 9.16454L16.8414 -0.780458L13.1586 0.780458L17.3736 10.7255L21.0564 9.16454ZM13.1586 -0.780458L8.94356 9.16454L12.6264 10.7255L16.8414 0.780458L13.1586 -0.780458ZM10.6159 7.95216L-0.169073 8.86716L0.169073 12.8528L10.9541 11.9378L10.6159 7.95216ZM-1.30954 12.3717L6.88046 19.4667L9.49955 16.4433L1.30954 9.34835L-1.30954 12.3717ZM6.2423 17.5006L3.7823 28.0456L7.6777 28.9544L10.1377 18.4094L6.2423 17.5006ZM6.76347 30.2123L16.0335 24.6173L13.9665 21.1927L4.69653 26.7877L6.76347 30.2123Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 2,
                },
                {
                  d: "M15 22.905L24.27 28.5L21.81 17.955L30 10.86L19.215 9.945L15 0L10.785 9.945L0 10.86L8.19 17.955L5.73 28.5L15 22.905Z",
                  fill: "rgba(239,239,143,1)",
                  fillRule: "nonzero",
                },
              ]}
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="200px"
            height="21px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="$"
            {...getOverrideProps(overrides, "$")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="47px"
            height="21px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={recipe?.rPrice}
            {...getOverrideProps(overrides, "100")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
