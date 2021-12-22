export { growDBConnection } from "./grow-database/";

// type TUuid = string;

//! type TGrowLection = {
//   id: TUuid;
//   description: string;
//   video: TUuid;
// };

//! type TGrowSkill = {
//   id: TSkill.id;
//   lections: TGrowLection.id[];
// };

// type TGrowProgress = {
//   userId: TGrowUser.id;
//   lectionId: TGrowLection.id;
//   finished: boolean;
// };

// type TGrowUser = {
//   id: TUser.id;
//   currentProfession: TUser.currentProfession;
//   selectedProfession: TProfession.id;
//   progresses: TGrowProgress.id[];
// };

/*
Юзер дата
- При входе пользователем в приложение приложение запрашивает данные пользвателя у сервиса хранения данных пользователя
- Если такого пользователя ещё нет в приложении, оно создаёт внутреннюю запись пользователя и насыщает её стартовыми значениями
- Иначе не меняет внутреннюю запись пользователя
- В данные пользователя добавляется выбранная профессия и текущая процессия 
- Приложение умеет запрашивать обновления от сервиса хранения данных пользователя

Профессии
- Приложение запрашивает все существующие профессии
- Приложение умеет запрашивать обновления по профессиям от сервиса хранения профессий

Скиллы
- Приложение запрашивает все существующие скиллы
- Приложение умеет запрашивать обновления по скиллам от сервиса хранения скиллов

TUser => App => (TGrowUser) <= (TProfession <= TSkill)
*/
