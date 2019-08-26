import React from 'react'
import {storiesOf} from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Button from "./button";

const stories = storiesOf('Atoms|Button', module);

  stories.add('primary', () => <Button
  label="Add To-do"
  onClick={action('click')}
  />)

