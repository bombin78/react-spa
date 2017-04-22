/**
 * Created by acer on 22.04.2017.
 */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';


const DevTools = createDevTools(
	//Параметр toggleVisibilityKey задает клавиши для переключения видимости DevTools
	//Параметр changePositionKey задает клавиши для переключения расположения монитора
	//Параметр defaultIsVisible задает видимость монитора по умолчанию
	<DockMonitor
		toggleVisibilityKey='ctrl-h'
		changePositionKey='ctrl-q'
		defaultIsVisible={true}
	>
		<LogMonitor theme='tomorrow' />
	</DockMonitor>
);

export default DevTools;
