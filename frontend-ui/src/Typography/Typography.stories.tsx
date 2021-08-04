import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Typography, TypographyProps } from './Typography';

export default {
  title: 'Base/Typography',
  component: Typography
} as Meta<TypographyProps>;

export const TypographyTypes: Story<TypographyProps> = (args) => {
  const { variant, as, ...restProps } = args;
  return (
    <>
      <div className='flex flex-col space-y-1'>
        <div className='flex flex-col'>
          <Typography variant='h1'>This is heading 1</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for page titles. There should be only one heading 1 per page
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='h2'>This is heading 2</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for titles underneath page title
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='h3'>This is heading 3</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for titles underneath heading 2
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='h4'>This is heading 4</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for titles underneath heading 3
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='body'>This is body</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for basic components such as lists, subtitles, one liners. Use bold styling for
              displaying dates.
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='body-small'>This is body-small</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for data dense elements, such as table data
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='paragraph'>This is paragraph</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for paragraphs, where readability is important
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='label'>This is label</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for form field labels
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='label-small'>This is label-small</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for data dense labels/headers, such as table headers
            </Typography>
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <Typography variant='label-tiny'>This is label-tiny</Typography>
          <div className='ml-4'>
            <Typography variant='body-small' italic>
              Use for main navigation, data dense input fields (such as in tables), and pagination
              labels. Use bold style for pagination labels
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-1 mt-6'>
        <Typography {...restProps}>
          Default variant is paragraph, which is rendered as p tag.
        </Typography>
        <Typography {...restProps} italic>
          This is default variant with italic styling. Note the extra margin between this and the
          paragraph above.
        </Typography>
        <Typography {...restProps} bold>
          This is default variant with bold styling
        </Typography>
        <Typography variant='h2' as='span' {...restProps}>
          This span element styled as h2 variant
        </Typography>
        <Typography {...restProps} variant='body'>
          This is an example of subtitle&nbsp;
          <Typography {...restProps} variant='body' bold>
            12/12/12
          </Typography>
        </Typography>
        <Typography {...restProps} variant='body'>
          This is an example of subtitle&nbsp;
          <Typography {...restProps} variant='body' bold>
            12/12/12
          </Typography>
        </Typography>
      </div>
    </>
  );
};
