import React from "react";
import { Stack } from "@anya-ui/components";
import { Page, Box } from "@/components";

const StackDemo = () => {
  return (
    <Page>
      <Stack>
        {Array.from({ length: 3 }, (a, i) => {
          return (
            <Box key={i}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus obcaecati quod quasi consequatur, mollitia alias
              dolorum magni omnis exercitationem! Rerum, maxime! Sunt cum
              incidunt fugit! Quam reiciendis vitae rem consequatur.
            </Box>
          );
        })}
      </Stack>
    </Page>
  );
};

export default StackDemo;
