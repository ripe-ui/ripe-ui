import * as React from 'react';

import { Parameters, StoryContext } from '@storybook/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MantineProvider } from '@mantine/core';

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()

  React.useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <StoryFn />
    </MantineProvider>
  )
}

export const parameters: Parameters = {
  controls: { expanded: true },
  viewport: { viewports: INITIAL_VIEWPORTS },
  options: {
    // @ts-ignore
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
}

export const decorators = [withChakra]
