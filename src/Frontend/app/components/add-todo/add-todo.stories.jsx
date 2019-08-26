import React from 'react'
import {storiesOf} from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import AddTodo from "./add-todo";

const stories = storiesOf('Molecules|Add-Todo', module);

  stories.add('primary', () => <AddTodo  />)
