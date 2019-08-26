import React from 'react'
import {storiesOf} from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Input from "./input";

const stories = storiesOf('Atoms|Input', module);

  stories.add('primary', () => <Input
  />)
