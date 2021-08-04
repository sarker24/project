import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Grid, GridProps } from './Grid';
import { GridElement } from './GridElement';
import { Typography } from '../Typography';

export default {
  title: 'Base/Grid',
  component: Grid
} as Meta<GridProps>;

const Template: Story<GridProps> = (args) => {
  return <Grid {...args} />;
};

export const GridWithColumns = Template.bind({});
GridWithColumns.args = {
  columns: 4,
  children: (
    <>
      <GridElement alignItems={'start'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
      <GridElement alignItems={'center'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
      <GridElement alignItems={'end'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
      <GridElement alignItems={'stretch'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
      <GridElement alignItems={'baseline'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
      <GridElement alignItems={'baseline'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
      <GridElement alignItems={'baseline'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
      <GridElement alignItems={'baseline'}>
        <div className='w-full border border-dashed flex flex-col items-center'>
          <Typography variant={'body'}>Grid Element</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </div>
      </GridElement>
    </>
  )
};

export const GridAlignment = Template.bind({});
GridAlignment.args = {
  children: (
    <>
      <div className='border border-dashed'>
        <GridElement alignItems={'start'}>
          <Typography variant={'body'}>Grid Element: alignItems = start</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </GridElement>
      </div>
      <div className='border border-dashed'>
        <GridElement alignItems={'center'}>
          <Typography variant={'body'}>Grid Element: alignItems = center</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </GridElement>
      </div>
      <div className='border border-dashed'>
        <GridElement alignItems={'end'}>
          <Typography variant={'body'}>Grid Element: alignItems = end</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </GridElement>
      </div>
      <div className='border border-dashed'>
        <GridElement alignItems={'stretch'}>
          <Typography variant={'body'}>Grid Element: alignItems = stretch</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </GridElement>
      </div>
      <div className='border border-dashed'>
        <GridElement alignItems={'baseline'}>
          <Typography variant={'body'}>Grid Element: alignItems = baseline</Typography>
          <div className='bg-primary h-24 w-24'></div>
        </GridElement>
      </div>
    </>
  ),
  columns: 4
};
