<<<<<<< HEAD
import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { EventsMetaData } from './Events/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole } from './HitTheMole/router-data';

import { blockRouterMetaData as blockRouterMetaDataHitTheMole2 } from './HitTheMole2/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  blockRouterMetaDataHitTheMole,

  blockRouterMetaDataHitTheMole2,
  blockRouterMetaDataMemoGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
=======
import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
>>>>>>> cb1f00eac004749a93ef0ee67a825d9663c94f75
