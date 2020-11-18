const texts_json = {};
texts_json['RU'] = {"Real":"Реальный","Investment":"Инвестиции","Gaming":"Игры","Virtual":"Виртуальный","Synthetic":"Синтетический","Financial":"Финансовый","Financial_STP":"Финансовый STP","Thank_you,_we'll_get_back_to_you_within_24_hours":"Спасибо! Мы свяжемся с вами в течение 24 часов","Online":"Онлайн","Offline":"Не в сети","Connecting_to_server":"Соединение с сервером","Your_password_is_one_of_the_most_commonly_used_passwords_on_the_internet__Please_choose_a_unique_password_":"Ваш пароль является одним из наиболее часто используемых паролей в Интернете. Пожалуйста, подберите уникальный пароль.","million":"млн.","thousand":"тыс.","Hint:_it_would_take_approximately_[_1][_2]_to_crack_your_password_":"Подсказка: на взламывание вашего пароля уйдёт примерно [_1][_2].","years":"год(а)/лет","days":"дн.","Unknown_OS":"Незнакомая операционная система","You_will_be_redirected_to_a_third-party_website_which_is_not_owned_by_Binary_com_":"Вы будете перенаправлены на сайт третьей стороны, который не принадлежит Binary.com.","Click_OK_to_proceed_":"Нажмите OK, чтобы продолжить.","Please_ensure_that_you_have_the_Telegram_app_installed_on_your_device_":"Пожалуйста, убедитесь, что вы установили приложение Telegram на ваше устройство.","[_1]_requires_your_browser's_web_storage_to_be_enabled_in_order_to_function_properly__Please_enable_it_or_exit_private_browsing_mode_":"Для полноценной работы [_1] необходимо разрешение использовать веб-хранилище вашего браузера. Пожалуйста, включите данную функцию или отключите режим приватности.","Please_[_1]log_in[_2]_or_[_3]sign_up[_4]_to_view_this_page_":"Чтобы просмотреть эту страницу, пожалуйста [_1]войдите на сайт[_2] или [_3]зарегистрируйтесь[_4].","Sorry,_this_feature_is_available_to_virtual_accounts_only_":"Извините, эта опция доступна только для демо-счетов.","This_feature_is_not_relevant_to_virtual-money_accounts_":"Эта функция недоступна на демо-счетах.","This_page_is_only_available_to_logged_out_clients_":"Эта страница доступна только для клиентов, вошедших на сайт.","Sorry,_but_binary_options_trading_is_not_available_in_your_financial_account_":"Извините, но торговля бинарными опционами недоступна на вашем финансовом счёте.","Sign_out":"Выход","[_1]_Account":"Счёт [_1]","Click_here_to_open_a_Real_Account":"Нажмите здесь для открытия Реального счёта","Open_a_Real_Account":"Открыть Реальный счёт","Click_here_to_open_a_Financial_Account":"Нажмите здесь для открытия Финансового счёта","Click_here_to_open_a_Gaming_account":"Нажмите здесь для открытия Игрового счёта","Open_a_Financial_Account":"Открыть Финансовый счёт","Create_Account":"Открыть счёт","Accounts_List":"Список счетов","Deposits_and_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"На вашем счете отключены функции пополнения и вывода средств. Проверьте свою электронную почту для получения более подробной информации.","Please_set_the_[_1]currency[_2]_of_your_account_":"Пожалуйста установите [_1]валюту[_2] вашего счёта.","Please_submit_your_[_1]proof_of_identity_and_proof_of_address[_2]_":"Пожалуйста, предоставьте [_1]удостоверение личности и подтверждение адреса[_2].","Your_[_1]proof_of_identity[_3]_and_[_2]proof_of_address[_3]_have_expired_":"Срок действия документов, [_1]удостоверяющих личность[_3] и [_2]подтверждающих адрес[_3], истёк.","Your_[_1]proof_of_identity[_2]_has_expired_":"Срок действия документа, [_1]удостоверяющего личность[_2], истёк.","Your_[_1]proof_of_address[_2]_has_expired_":"Срок действия документа, [_1]подтверждающего адрес[_2], истёк.","Your_[_1]proof_of_identity[_3]_and_[_2]proof_of_address[_3]_have_not_been_verified_":"Ваши документы, подтверждающие [_1]личность[_3] и [_2]адрес[_3] не прошли проверку","Your_[_1]proof_of_identity[_2]_has_not_been_verified_":"Ваш документ, [_1]подтверждающий личность[_2], не прошел проверку.","Your_[_1]proof_of_address[_2]_has_not_been_verified_":"Ваш документ, [_1]подтверждающий адрес[_2], не прошел проверку.","Please_submit_your_[_1]proof_of_identity[_2]_":"Пожалуйста, предоставьте [_1]удостоверение личности[_2].","Please_submit_your_[_1]proof_of_address[_2]_":"Пожалуйста, предоставьте [_1]подтверждение адреса[_2].","Your_account_is_restricted__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"Ваш счёт заблокирован. Пожалуйста, свяжитесь с нашей [_1]cлужбой поддержки[_2] для получения дальнейшей помощи.","Please_set_your_[_1]30-day_turnover_limit[_2]_to_remove_deposit_limits_":"Пожалуйста, установите [_1]лимит на 30-дневный оборот счета[_2], чтобы устранить лимиты на пополнение.","MT5_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"На вашем счете MT5 отключен вывод средств. Проверьте свою электронную почту для получения более подробной информации.","Trading_and_withdrawals_have_been_disabled_on_your_account__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"На вашем счете заблокирована торговля и вывод средств. Пожалуйста, свяжитесь со [_1]службой поддержки[_2] для получения помощи.","Please_complete_your_[_1]personal_details[_2]_before_you_proceed_":"Чтобы продолжить, введите ваши [_1]личные данные[_2].","Please_set_[_1]country_of_residence[_2]_before_upgrading_to_a_real-money_account_":"Пожалуйста, укажите [_1]страну проживания[_2] до перехода на реальный счёт.","Please_complete_the_[_1]financial_assessment_form[_2]_to_lift_your_withdrawal_and_trading_limits_":"Прежде, чем продолжить, пожалуйста, заполните следующую [_1]форму финансовой оценки[_2].","Please_[_1]complete_your_account_profile[_2]_to_lift_your_withdrawal_and_trading_limits_":"Пожалуйста, [_1]заполните свой профайл,[_2] чтобы снять лимиты на трейдинг и вывод средств.","Withdrawals_have_been_disabled_on_your_account__Please_wait_until_your_uploaded_documents_are_verified_":"На вашем счете временно заблокирован вывод средств. Пожалуйста, подождите, пока загруженные вами документы будут проверены.","Withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"На вашем счете отключен вывод средств. Проверьте свою электронную почту для получения более подробной информации.","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_":"Пожалуйста, [_1]примите обновлённые Правила и условия[_1].","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_to_lift_your_deposit_and_trading_limits_":"Пожалуйста, [_1]примите обновленные Правила и условия[_2], чтобы снять лимиты на пополнение счета и трейдинг.","Account_Authenticated":"Аутентификация пройдена","Connection_error:_Please_check_your_internet_connection_":"Проблема со связью: пожалуйста, проверьте ваше подключение к интернету.","Network_status":"Статус сети","This_is_a_staging_server_-_For_testing_purposes_only":"Это вспомогательный сервер, применяемый только для тестирования","The_server_<a_href=\"[_1]\">endpoint</a>_is:_[_2]":"<a href=\"[_1]\">Конечная точка</a> сервера: [_2]","Your_web_browser_([_1])_is_out_of_date_and_may_affect_your_trading_experience__Proceed_at_your_own_risk__[_2]Update_browser[_3]":"Ваш веб браузер ([_1]) устарел, что может повлиять на результаты вашей торговли. Рекомендуем [_2]обновить браузер[_3]","You_have_reached_the_rate_limit_of_requests_per_second__Please_try_later_":"Вы достигли лимита на количество запросов в секунду. Пожалуйста, повторите попытку позже.","Please_select":"Выберите","There_was_some_invalid_character_in_an_input_field_":"Неразрешённый символ в поле ввода.","Please_accept_the_terms_and_conditions_":"Пожалуйста, примите правила и условия.","Please_confirm_that_you_are_not_a_politically_exposed_person_":"Пожалуйста подтвердите, что вы не являетесь политически-значимым лицом.","Today":"Cегодня","Select_date":"Выберите дату","Barrier":"Барьер","Entry_Spot":"Входная котировка","Exit_Spot":"Выходная котировка","Charting_for_this_underlying_is_delayed":"Графики для этого инструмента рисуются с задержкой","Payout_Range":"Диапазон выплат","Purchase_Time":"Время покупки","Reset_Barrier":"Барьер Reset","Reset_Time":"Время Reset","Selected_Tick":"Выбранный тик","Exit_Time":"Время окончания","Start_Time":"Время начала","Fiat":"Фиатные","Crypto":"Крипто","Verification_code_is_wrong__Please_use_the_link_sent_to_your_email_":"Неправильный проверочный код. Пожалуйста, воспользуйтесь ссылкой, отправленной на ваш email.","Indicates_required_field":"Обозначает поле, которое является обязательным","Please_select_the_checkbox_":"Пожалуйста, выберите нужный ответ.","This_field_is_required_":"Данное поле является необходимым.","Should_be_a_valid_number_":"Введите правильное число.","Up_to_[_1]_decimal_places_are_allowed_":"Разрешенное количество десятичных: до [_1].","Should_be_[_1]":"Должно составлять [_1]","Should_be_between_[_1]_and_[_2]":"Допустимые значения: от [_1] до [_2]","Should_be_more_than_[_1]":"Значение должно быть больше [_1]","Should_be_less_than_[_1]":"Значение должно быть меньше [_1]","Invalid_email_address_":"Неправильный e-mail.","Password_should_have_lower_and_uppercase_English_letters_with_numbers_":"Пароль должен состоять из заглавных, строчных латинских букв и цифр.","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Разрешены только буквы, цифры, пробелы, дефис, точки и апостроф.","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_[_1]":"Разрешены только буквы, цифры, пробел и следующие символы: [_1]","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"Допускаются только буквы латинского алфавита, пробелы, дефисы, точки и апострофы.","Only_letters,_numbers,_space,_and_hyphen_are_allowed_":"Разрешены только буквы, цифры, пробелы и дефисы.","Please_enter_a_valid_phone_number,_including_the_country_code_(e_g__+15417541234)_":"Пожалуйста, введите действительный номер телефона, с кодом страны (например +15417541234).","The_two_passwords_that_you_entered_do_not_match_":"Введенные пароли не совпадают.","[_1]_and_[_2]_cannot_be_the_same_":"[_1] и [_2] не могут совпадать.","Minimum_of_[_1]_characters_required_":"Необходимо минимум [_1] знака(ов).","You_should_enter_[_1]_characters_":"Вы должны ввести [_1] символов.","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"Должно начинаться с буквы или цифры; может содержать дефис и нижнее подчёркивание.","Invalid_verification_code_":"Неправильный код подтверждения.","Your_password_cannot_be_the_same_as_your_email_address_":"Пароль и адрес электронной почты не могут совпадать.","Transaction_performed_by_[_1]_(App_ID:_[_2])":"Транзакция проведена [_1] (App ID: [_2])","Guide":"Экскурс","Next":"Далее","Finish":"Завершить","Step":"Шаг","Select_your_market_and_underlying_asset":"Выберите рынок и основной актив","Select_your_trade_type":"Выбрать тип контракта","Adjust_trade_parameters":"Изменить параметры контракта","Predict_the_direction<br_/>and_purchase":"Предскажите направление движения<br />и купите","Your_session_duration_limit_will_end_in_[_1]_seconds_":"Ограничение на длительность сессии закончится через [_1] сек.","January":"Январь","February":"Февраль","March":"Март","April":"Апрель","May":"Май","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октябрь","November":"Ноябрь","December":"Декабрь","Jan":"Янв","Feb":"Фев","Mar":"Мар","Apr":"Апр","Jun":"Июн","Jul":"Июл","Aug":"Авг","Sep":"Сен","Oct":"Окт","Nov":"Ноя","Dec":"Дек","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"пятница","Saturday":"Суббота","Su":"Вс","Mo":"Пн","Tu":"Вт","We":"Ср","Th":"Чт","Fr":"Пт","Sa":"Сб","Previous":"Предыдущ.","Hour":"Час.","Minute":"Мин.","AM":"утра","PM":"вечера","Verification_required":"Требуется проверка","Verify_identity":"Подтвердить личность","From_account:_":"Со счёта: ","To_account:_":"На счёт: ","Not_announced_for_this_currency_":"Нет данных для этой валюты.","Your_virtual_account_balance_is_currently_[_1]_or_less__You_may_top_up_your_account_with_an_additional_[_2]_":"В данный момент баланс вашего демо-счёта составляет [_1] или ниже. Вы можете пополнить счёт дополнительными [_2].","You_can_top_up_your_virtual_account_with_an_additional_[_1]_if_your_balance_is_[_2]_or_less_":"Вы можете дополнительно внести на демо-счёт [_1], если его баланс составит [_2] или ниже.","[_1]Manage_your_accounts[_2]":"[_1]Управление счетами[_2]","You_can_no_longer_change_the_currency_because_you've_created_an_MT5_account_":"Вы не можете изменить валюту счёта, так как вы открыли счёт MT5.","You_can_no_longer_change_the_currency_because_you've_made_a_first-time_deposit_":"Вы не можете изменить валюту счёта, так как вы уже пополняли счёт.","This_is_your_[_1]_account_":"Это ваш счёт [_1].","Your_fiat_account's_currency_is_currently_set_to_[_1]_":"Валютой вашего фиатного счета является [_1].","Your_fiat_account's_currency_is_set_to_[_1]_":"Валютой вашего фиатного счета является [_1].","Don't_want_to_trade_in_[_1]?_You_can_open_another_cryptocurrency_account_":"Не хотите торговать в [_1]? Вы можете открыть другой криптовалютный счёт.","You_can_[_1]set_a_new_currency[_2]_before_you_deposit_for_the_first_time_or_create_an_MT5_account_":"Вы можете [_1]установить новую валюту[_2] перед первым пополнением счёта или открытием счёта MT5.","Withdraw":"Вывод","Deposit":"Пополнение","Town/City":"Город","First_line_of_home_address":"Адрес (улица, дом, кв.)","Postal_Code/ZIP":"Почтовый код/индекс","State/Province":"Штат/провинция/область","Email_address":"Эл. адрес","Telephone":"Номер телефона","Country_of_Residence":"Страна проживания","details":"подробности","Yes_I'm_sure":"Да, я уверен(а)","Cancel":"Отмена","Are_you_sure_you_want_to_deposit_in_[_1]?":"Вы уверены, что хотите внести сумму в [_1]?","You_will_not_be_able_to_change_your_fiat_account's_currency_after_making_this_deposit__Are_you_sure_you_want_to_proceed?":"Вы не сможете изменить валюту фиатного счета после его пополнения. Вы уверены, что хотите продолжить?","[_1]No,_change_my_fiat_account's_currency_now[_2]":"[_1]Нет, я хочу изменить валюту моего фиатного счёта[_2]","Your_cashier_is_locked_":"Ваша касса заблокирована.","Please_note_that_the_selected_currency_is_allowed_for_limited_accounts_only_":"Обратите внимание, что выбранная валюта доступна для ограниченного числа счетов.","Sorry,_deposits_for_this_currency_are_currently_disabled_":"Извините, пополнение счета в этой валюте временно недоступно.","Sorry,_withdrawals_for_this_currency_are_currently_disabled_":"Извините, вывод средств в этой валюте временно недоступен.","You_have_reached_the_withdrawal_limit_":"Вы достигли лимита на вывод.","Payment_Agent_services_are_not_available_in_your_country_or_in_your_preferred_currency_":"Услуги платежного агента недоступны в вашей стране или в выбранной вами валюте.","Select_payment_agent":"Выберите платежного агента","Amount_in":"Сумма в","Insufficient_balance_":"Недостаточно средств на счете.","Only_letters,_numbers,_space,_hyphen,_period,_comma,_and_apostrophe_are_allowed_":"Разрешены только буквы, цифры, пробелы, дефисы, точки, запятые и апострофы.","Your_request_to_withdraw_[_1]_[_2]_from_your_account_[_3]_to_Payment_Agent_[_4]_account_has_been_successfully_processed_":"Ваш запрос на вывод [_1] [_2] со счета [_3] на счет платежного агента [_4] был выполнен успешно.","Your_token_has_expired_or_is_invalid__Please_click_[_1]here[_2]_to_restart_the_verification_process_":"Срок действия вашего ключа истёк. Пожалуйста, нажмите [_1]здесь,[_2] чтобы повторно запустить процесс проверки.","Please_[_1]deposit[_2]_to_your_account_":"Пожалуйста, [_1]пополните[_2] счёт.","Sorry,_account_signup_is_not_available_in_your_country_":"К сожалению, регистрация счета недоступна в вашей стране.","Asset":"Актив","Opens":"Открывается","Closes":"Закрывается","Settles":"Заканчивается","Upcoming_Events":"Ближайшие события","Add_+/–_to_define_a_barrier_offset__For_example,_+0_005_means_a_barrier_that's_0_005_higher_than_the_entry_spot_":"Добавьте +/–, чтобы определить оффсет барьера. Например, +0.005 означает, что барьер будет на 0.005 выше входной спот-котировки.","Digit":"Десятичн.","Percentage":"Проценты","Waiting_for_entry_tick_":"В ожидании входного тика...","High_Barrier":"Верхний барьер","Low_Barrier":"Нижний Барьер","Waiting_for_exit_tick_":"В ожидании выходного тика.","Ticks_history_returned_an_empty_array_":"История тиков представляет пустой массив.","Chart_is_not_available_for_this_underlying_":"График этого актива недоступен.","Purchase":"Покупка","Net_profit":"Чистая прибыль","Return":"Прибыль","Time_is_in_the_wrong_format_":"Неправильный формат времени.","Rise/Fall":"Повышение/Падение","Higher/Lower":"Выше/Ниже","Matches/Differs":"Совпадение/Отличие","Even/Odd":"Чётное/Нечётное","Over/Under":"Над/Под","High-Close":"Макс.-Закрытие","Close-Low":"Закрытие-Мин.","High-Low":"Макс.-Мин.","Reset_Call":"Reset Колл","Reset_Put":"Reset Пут","Up/Down":"Вверх/Вниз","Only_Ups/Only_Downs":"Только вверх/вниз","In/Out":"Внутри/Вне","Select_Trade_Type":"Выберите вид контракта","Tick":"Тики","Spot":"Спот-котировка","Spot_Time_(GMT)":"Спот (GMT)","seconds":"сек.","minutes":"мин.","hours":"час.","ticks":"тик.","tick":"тик.","second":"сек.","minute":"мин.","hour":"час.","day":"дн.","Duration":"Длительность","End_Time":"Окончание","Purchase_request_sent":"Запрос на покупку отправлен","High":"Макс.","Close":"Закрытие","Low":"Мин.","Select_Asset":"Выберите актив","Search___":"Поиск...","Maximum_multiplier_of_1000_":"Максимальный множитель 1000.","Stake":"Ставка","Payout":"Выплата","Multiplier":"Множитель","Trading_is_unavailable_at_this_time_":"В данное время торговля недоступна.","Please_reload_the_page":"Пожалуйста, перезагрузите страницу","Your_application_to_be_treated_as_a_professional_client_is_being_processed_":"Ваша заявка на квалификацию профессионального клиента находится на рассмотрении.","Your_professional_client_request_is_[_1]not_approved[_2]_":"Ваша заявка на статус профессионального клиента [_1]отклонена[_2].","Please_reapply_once_the_required_criteria_has_been_fulfilled_":"Пожалуйста, подайте повторную заявку, когда будут выполнены необходимые критерии.","More_information_can_be_found_in_an_email_sent_to_you_":"Дополнительная информация указана в отправленном вам письме.","I_want_to_reapply":"Я хочу подать заявку повторно","In_the_EU,_financial_binary_options_are_only_available_to_professional_investors_":"Финансовые контракты на бинарных опционах в ЕС доступны только для профессиональных инвесторов.","Apply_now_as_a_professional_investor":"Подайте заявку на статус профессионального инвестора","Try_our_[_1]Synthetic_Indices[_2]_":"Опробуйте наши [_1]Синтетические индексы[_2].","Try_our_other_markets_":"Вы можете торговать на других активах.","Please_complete_the_[_1]Real_Account_form[_2]_to_verify_your_age_as_required_by_the_[_3]UK_Gambling[_4]_Commission_(UKGC)_":"Пожалуйста, заполните [_1]форму на открытие Реального счёта[_2], чтобы подтвердить ваш возраст, в соответствии с требованиями [_3]Комиссии по азартным играм[_4] Великобритании (UKGC).","Account_access_is_temporarily_limited__Please_check_your_inbox_for_more_details_":"Доступ к счёту временно ограничен. Пожалуйста, проверьте почту для получения более подробной информации.","Contract_Confirmation":"Подтверждение контракта","Your_transaction_reference_is":"Номер вашей транзакции:","Total_Cost":"Общая стоимость","Potential_Payout":"Потенциальная выплата","Potential_Profit":"Потенциальная прибыль","View":"Просмотр","This_contract_won":"Вы выиграли","This_contract_lost":"Вы проиграли","The_reset_time_is_[_1]":"Время Reset: [_1]","Now":"Сейчас","Average":"Среднее","Buy_price":"Цена покупки","Final_price":"Итоговая цена","Loss":"Потери","Profit":"Прибыль","Account_balance:":"Баланс счета:","Reverse_Side":"Обратная сторона","Front_Side":"Лицевая сторона","Pending":"Ожидающ.","Submitting":"Отправка","Submitted":"Отправлено","Failed":"Возникла ошибка","Compressing_Image":"Уменьшение изображения","Checking":"Проверка","Checked":"Проверено","Unable_to_read_file_[_1]":"Не удалось прочитать файл [_1]","Passport":"Паспорт","Identity_card":"Удостоверение личности","Driving_licence":"Водительское удостоверение","Invalid_document_format_":"Недопустимый формат документа.","File_([_1])_size_exceeds_the_permitted_limit__Maximum_allowed_file_size:_[_2]":"Размер файла ([_1]) превышает разрешенный лимит. Максимальный допустимый размер: [_2]","ID_number_is_required_for_[_1]_":"Номер ID необходим для [_1].","Only_letters,_numbers,_space,_underscore,_and_hyphen_are_allowed_for_ID_number_([_1])_":"Для номера ID разрешены только буквы, цифры, пробел, нижнее подчёркивание, и дефис ([_1]).","Expiry_date_is_required_for_[_1]_":"Срок истечения необходим для [_1].","Place_of_birth":"Место рождения","Current_password":"Текущий пароль","New_password":"Новый пароль","Please_enter_a_valid_Login_ID_":"Пожалуйста, введите правильное имя пользователя.","Amount":"Количество","Your_request_to_transfer_[_1]_[_2]_from_[_3]_to_[_4]_has_been_successfully_processed_":"Ваш запрос на перевод [_1] [_2] с [_3] на [_4] был выполнен успешно.","Resale_not_offered":"Продажа не предлагается","Your_account_has_no_trading_activity_":"На вашем счете нет торговой деятельности.","Date":"Дата","Ref_":"Ном.","Contract":"Контракт","Purchase_Price":"Цена покупки","Sale_Date":"Дата продажи","Sale_Price":"Цена продажи","Profit/Loss":"Плюс/Минус","Details":"Подробности","Total_Profit/Loss":"Общая прибыль/убыток","accounts":"счета","account":"счёт","Sorry,_an_error_occurred_while_processing_your_request_":"Извините, при обработке вашего запроса произошла ошибка.","Please_specify_the_reasons_for_closing_your_accounts":"Пожалуйста, укажите причину закрытия счетов","The_reason_should_be_between_5_and_250_characters":"Причина должна содержать от 5 до 250 знаков","Please_select_a_reason_":"Пожалуйста, укажите причину.","Only_[_1]_are_allowed_":"Разрешены только [_1].","letters":"буквы","numbers":"цифры","space":"пробел","Please_select_at_least_one_scope":"Выберите хотя бы одну область","New_token_created_":"Создан новый ключ.","The_maximum_number_of_tokens_([_1])_has_been_reached_":"Достигнуто максимальное число ключей ([_1]).","Name":"Имя и фамилия","Token":"Ключ","Scopes":"Сфера действия","Last_Used":"Последние","Action":"Акт","Are_you_sure_that_you_want_to_permanently_delete_the_token":"Вы уверены, что хотите навсегда удалить ключ?","Delete":"Удалить","Never_Used":"Никогда не использовался","You_have_not_granted_access_to_any_applications_":"Вы не предоставили доступ ни к каким приложениям.","Are_you_sure_that_you_want_to_permanently_revoke_access_to_the_application":"Вы уверены, что хотите навсегда отказаться от доступа к приложению","Revoke_access":"Отмена доступа","Admin":"Администратор","Payments":"Платежи","Read":"Читать","Trade":"Торговля","Trading_Information":"Торговая информация","Never":"Никогда","Permissions":"Разрешения","Last_Login":"Последний вход","You_did_not_change_anything_":"Вы не внесли никаких изменений.","Your_changes_have_been_updated_successfully_":"Ваши изменения успешно обновлены.","Successful":"Успешно","Date_and_Time":"Дата и время","Browser":"Браузер","IP_Address":"IP-адрес","Status":"Статус","Your_account_has_no_Login/Logout_activity_":"На вашем счете нет активности входов/выходов.","Your_account_is_fully_authenticated_and_your_withdrawal_limits_have_been_lifted_":"Ваш счет полностью авторизован, и лимит на вывод был снят.","Your_[_1]_day_withdrawal_limit_is_currently_[_2][_3]_":"Ваш [_1]-дневный лимит на вывод средств составляет [_2][_3].","You_have_already_withdrawn_[_1][_2]_in_aggregate_over_the_last_[_3]_days_":"Вы уже в сумме вывели [_1][_2] за последние [_3] суток.","Your_withdrawal_limit_is_[_1][_2]_":"Ваш лимит на вывод составляет [_1][_2].","You_have_already_withdrawn_[_1][_2]_":"Вы уже вывели со счета [_1][_2].","Hence,_your_withdrawable_balance_is_only_up_to_[_1][_2],_subject_to_your_account’s_available_funds_":"Соответственно, остаток средств, доступный для вывода, составляет всего [_1][_2], в зависимости от доступных средств на вашем счете.","Please_confirm_that_all_the_information_above_is_true_and_complete_":"Пожалуйста, подтвердите, что вся информация, указанная выше, является точной и достоверной.","Your_settings_have_been_updated_successfully_":"Ваши настройки успешно обновлены.","Sorry,_an_error_occurred_while_processing_your_account_":"Извините, произошла ошибка.","Please_select_a_country":"Выберите страну","Timed_out_until":"Ограничение до","Excluded_from_the_website_until":"Доступ к сайту закрыт до","Session_duration_limit_cannot_be_more_than_6_weeks_":"Лимит на длительность сессии не может превышать 6 недель.","Time_out_must_be_after_today_":"Перерыв должен быть позднее сегодняшней даты.","Time_out_cannot_be_more_than_6_weeks_":"Перерыв не может превышать 6 недель.","Time_out_cannot_be_in_the_past_":"Перерыв не может быть в прошлом.","Please_select_a_valid_time_":"Пожалуйста, выберите правильное время.","Exclude_time_cannot_be_less_than_6_months_":"Период ограничения не может быть менее 6 месяцев.","Exclude_time_cannot_be_for_more_than_5_years_":"Период ограничения не может быть больше 5 лет.","Confirm_changes":"Подтвердить изменения","We’ll_update_your_limits__Click_[_1]Agree_and_accept[_2]_to_acknowledge_that_you_are_fully_responsible_for_your_actions,_and_we_are_not_liable_for_any_addiction_or_loss_":"Мы обновим ваши лимиты. Нажмите [_1]Согласиться и принять[_2], чтобы подтвердить, что вы осознаете и полностью отвечаете за свои действия, и мы не несем ответственности за какие-либо убытки или зависимость.","Agree_and_accept":"Согласиться и принять","Go_back":"Назад","When_you_click_\"OK\"_you_will_be_excluded_from_trading_on_the_site_until_the_selected_date_":"Когда вы нажмёте \"ОК\", вы будете отстранены от работы на сайте до окончания выбранной даты.","Your_changes_have_been_updated_":"Ваши изменения внесены успешно.","Disable":"Отключить","Enable":"Активировать","You_have_successfully_enabled_two-factor_authentication_for_your_account_":"Вы успешно включили двухступенчатую аутентификацию на вашем счете.","You_have_successfully_disabled_two-factor_authentication_for_your_account_":"Вы успешно отключили двухступенчатую аутентификацию на вашем счете.","You_do_not_need_to_authenticate_your_account_at_this_time_[_1]We_will_inform_you_when_your_account_needs_to_be_authenticated_":"В настоящее время вам не нужно аутентифицировать свой счет.[_1]Мы сообщим вам, когда счету потребуется аутентификация.","No_authentication_required":"Аутентификация не требуется","Back_to_trading":"Вернуться к трейдингу","You_are_categorised_as_a_professional_client_":"Вы относитесь к категории профессиональных клиентов.","You_are_categorised_as_a_retail_client__Apply_to_be_treated_as_a_professional_trader_":"Вы относитесь к категории индивидуальных клиентов. Подайте заявку, чтобы получить статус профессионального трейдера.","Bid":"Бид","Closed_Bid":"Закрытая ставка","Reference_ID":"Номер","Description":"Описание","Credit/Debit":"Кредит/Дебет","Balance":"Баланс","Top_up_error":"Ошибка при пополнении","Understood":"Понятно","Top-up_successful":"Пополнение прошло успешно","[_1]_has_been_credited_into_your_Virtual_Account:_[_2]_":"[_1] зачислено на ваш демо-счет: [_2].","Go_to_statement":"Вернуться к выпискам","Continue_trading":"Продолжить торговлю","Account":"Счёт","Available_Markets":"Доступные рынки","Type":"Тип","Currency":"Валюта","Financial_Account":"Финансовый счёт","Gaming_Account":"Игровой счет","Real_Account":"Реальный счет","Counterparty":"Контрагент","Jurisdiction":"Юрисдикция","Create_account":"Открыть счёт","Change_currency":"Изменить валюту","Note:_You_are_limited_to_one_fiat_currency_account__The_currency_of_your_fiat_account_can_be_changed_before_you_deposit_into_your_fiat_account_for_the_first_time_or_create_an_MT5_account__You_may_also_open_one_account_for_each_supported_cryptocurrency_":"Примечание: вы можете открыть только один счет в фиатной валюте. Валюту фиатного счета можно изменить до того, как вы первый раз пополните этот счет или откроете счёт MT5. Также вы можете открыть по одному счёту в каждой доступной криптовалюте.","This_account_is_disabled":"Данный счёт неактивен","This_account_is_excluded_until_[_1]":"Данный счёт исключён до [_1]","Set_currency":"Укажите валюту","Commodities":"Сырьевые товары","Forex":"Форекс","Stock_Indices":"Фондовые индексы","Stocks":"Акции","Synthetic_Indices":"Синтетические индексы","Please_check_your_email_for_the_password_reset_link_":"Пожалуйста, проверьте свой email. Вам должна прийти ссылка для восстановления пароля.","Demo_Synthetic":"Демо Синтетический","Real_Synthetic":"Реальный Синтетический","Demo_Financial":"Демо Финансовый","Real_Financial":"Реальный Финансовый","Demo_Financial_STP":"Демо Финансовый STP","Real_Financial_STP":"Реальный Финансовый STP","Sign_up":"Зарегистрируйтесь","Trading_contracts_for_difference_(CFDs)_on_Synthetic_Indices_may_not_be_suitable_for_everyone__Please_ensure_that_you_fully_understand_the_risks_involved,_including_the_possibility_of_losing_all_the_funds_in_your_MT5_account__Gambling_can_be_addictive_–_please_play_responsibly_":"Торговля контрактами на разницу (CFD) на Синтетических индексах подходит далеко не для всех. Пожалуйста, убедитесь, что вы хорошо осознаёте все сопряженные риски, включая риск потерять все средства на счете MT5. Торговая деятельность может вызвать привыкание, поэтому, пожалуйста, торгуйте ответственно.","Do_you_wish_to_continue?":"Хотите продолжить?","Acknowledge":"Подтвердить","Change_Password":"Сменить пароль","The_[_1]_password_of_account_number_[_2]_has_been_changed_":"Изменён пароль [_1] для счёта [_2].","Reset_Password":"Изменить пароль","Verify_Reset_Password":"Подтвердите изменение пароля","Please_check_your_email_for_further_instructions_":"Проверьте свою электронную почту. Вам должны прийти инструкции.","[_1]_deposit_from_[_2]_to_account_number_[_3]_is_done__Transaction_ID:_[_4]":"Вы успешно перевели средства [_1] со счёта [_2] на счёт [_3]. Номер транзакции: [_4]","[_1]_withdrawal_from_account_number_[_2]_to_[_3]_is_done__Transaction_ID:_[_4]":"Вывод средств [_1] со счёта [_2] на счёт [_3] завершен. Номер транзакции: [_4]","You_have_insufficient_funds_in_your_Binary_account,_please_<a_href=\"[_1]\">add_funds</a>_":"На вашем счете Binary недостаточно средств. Пожалуйста, <a href=\"[_1]\">пополните счёт</a>.","You_have_insufficient_funds_in_your_MT5_account_":"На вашем счете MT5 недостаточно средств.","Sorry,_this_feature_is_not_available_in_your_jurisdiction_":"Извините, эта функция недоступна в вашей юрисдикции.","[_1]_has_been_credited_into_your_MT5_Demo_Account:_[_2]_":"[_1] зачислено на ваш демо-счёт MT5: [_2].","Demo_Accounts":"Демо-счета","Real-Money_Accounts":"Реальный–Валютные счета","Demo_Account":"Демо-счёт","Real-Money_Account":"Реальный счёт","for_account_[_1]":"для счёта [_1]","[_1]_Account_[_2]":"[_1] Счёт [_2]","Get_[_1]":"Получить[_1]","Your_demo_account_balance_is_currently_[_1]_or_less__You_may_top_up_your_account_with_an_additional_[_2]_":"В данный момент баланс вашего демо-счёта составляет [_1] или ниже. Вы можете пополнить счёт дополнительными [_2].","You_can_top_up_your_demo_account_with_an_additional_[_1]_if_your_balance_is_[_2]_or_less_":"Вы можете дополнительно внести на демо-счёт [_1], если его баланс составит [_2] или ниже.","Yes,_I'm_sure":"Да, я уверен(а)","Are_you_sure?":"Вы уверены?","You_will_not_be_able_to_change_your_fiat_account's_currency_after_creating_this_MT5_account__Are_you_sure_you_want_to_proceed?":"Вы не сможете изменить валюту фиатного счета после открытия этого счета MT5. Вы уверены, что хотите продолжить?","Your_token_has_expired_or_is_invalid__Please_click_<a_href=\"[_1]\">here</a>_to_restart_the_verification_process_":"Срок действия вашего ключа истёк. Пожалуйста, нажмите <a href=\"[_1]\">здесь,</a> чтобы повторно запустить процесс проверки.","The_email_address_provided_is_already_in_use__If_you_forgot_your_password,_please_try_our_<a_href=\"[_1]\">password_recovery_tool</a>_or_contact_our_customer_service_":"Указанный вами электронный адрес уже используется для другого счёта. Если вы забыли пароль своего счёта, пожалуйста, воспользуйтесь <a href=\"[_1]\">инструментом восстановления пароля</a> или свяжитесь с нашей службой поддержки.","Password_is_not_strong_enough_":"Пароль недостаточно надёжный.","Upgrade_now":"Обновить сейчас","[_1]_days_[_2]_hours_[_3]_minutes":"[_1] дн. [_2] ч. [_3] мин.","Your_trading_statistics_since_[_1]_":"Ваша торговая статистика с [_1].","[_1]_Please_click_the_link_below_to_restart_the_password_recovery_process_":"[_1] Пожалуйста, нажмите на ссылку ниже для повторного восстановления пароля.","Your_password_has_been_successfully_reset__Please_log_into_your_account_using_your_new_password_":"Ваш пароль был изменен. Пожалуйста, зайдите на счет, используя новый пароль.","Tether_Omni_(USDT)_is_a_version_of_Tether_that's_pegged_to_USD_and_is_built_on_the_Bitcoin_blockchain_":"Tether Omni (USDT) - это версия Tether, привязанная к доллару США и построенная на блокчейне Bitcoin.","Tether_ERC20_(eUSDT)_is_a_version_of_Tether_that's_pegged_to_USD_and_is_hosted_on_the_Ethereum_platform_":"Tether ERC20 (eUSDT) - это версия Tether, привязанная к доллару США и размещенная на платформе Ethereum.","Please_select_the_currency_for_this_account:":"Пожалуйста, выберите валюту этого счёта:","Do_you_want_this_to_be_a_fiat_account_or_crypto_account?_Please_choose_one:":"Вы хотите, чтобы этот счет был фиатным или крипто счетом? Пожалуйста, выберите:","Are_you_sure_you_want_to_create_your_[_1]_account_now?":"Вы уверены, что хотите открыть счёт [_1] сейчас?","Note:":"Примечание:","You_may_open_one_account_for_each_supported_cryptocurrency_":"Вы можете открыть по одному счёту на каждую доступную криптовалюту.","Are_you_sure_you_want_to_create_a_fiat_account_in_[_1]?":"Вы уверены, что хотите открыть фиатный счёт в [_1]?","You_are_limited_to_one_fiat_account__You_can_change_the_currency_of_your_fiat_account_anytime_before_you_make_a_first-time_deposit_or_create_an_MT5_account_":"Вы можете владеть только одним фиатным счетом. Вы можете изменить валюту фиатного счета, если ещё не пополняли счет или не открывали счет MT5.","Yes":"Да","Create_[_1]_account":"Открыть счет [_1]","You_have_successfully_set_your_account_currency_to_[_1]_":"Вы успешно установили валюту счёта: [_1].","You_have_successfully_changed_your_account_currency_from_[_1]_to_[_2]_":"Вы успешно изменили валюту счёта с [_1] на [_2].","Please_choose_a_currency":"Пожалуйста, выберите валюту","Asian_Up":"Азиатские вверх","Asian_Down":"Азиатские вниз","Higher":"Выше","Higher_or_equal":"Выше или равно","Lower":"Ниже","Lower_or_equal":"Ниже или равно","Digit_Matches":"Совпадение цифр","Digit_Differs":"Несовпад. цифр","Digit_Odd":"Нечётная цифра","Digit_Even":"Чётная цифра","Digit_Over":"Цифра выше","Digit_Under":"Цифра ниже","Ends_Outside":"закончится вне","Ends_Between":"закончится внутри","Stays_Between":"Останется внутри","Goes_Outside":"выйдет за пределы","Touches":"Коснётся","Does_Not_Touch":"не коснется","Call_Spread":"Колл спред","Put_Spread":"Пут спред","High_Tick":"Высокий тик","Low_Tick":"Низкий тик","Only_Ups":"Только вверх","Only_Downs":"Только вниз","Multiplier_Up":"Множитель Вверх","Multiplier_Down":"Множитель Вниз","Equals":"Равно","Not":"Не","Buy":"Покупка","Sell":"Продажа","Waiting_for_contract_settlement_":"Ожидание закрытия контракта.","including_Deal_Cancel__Fee":"включая комиссию за отмену сделки","Contract_has_not_started_yet":"Контракт ещё не начался","This_contract_is_only_available_on_[_1]DTrader[_2]_":"Этот контракт доступен только на [_1]DTrader[_2].","This_contract_is_only_available_on_DTrader_[_1][_2]Go_to_Dtrader[_3]_to_close_or_cancel_this_contract_":"Этот контракт доступен только на DTrader. Чтобы продать или отменить данный контракт, [_1][_2]Перейдите на DTrader[_3].","Contract_Result":"Результат контракта","Close_Time":"Время закрытия","Exit_Spot_Time":"Время выходной котировки","Audit":"Аудит","View_chart":"Обзор графика","Audit_Page":"Страница аудита","Contract_Starts":"Начало контракта","Contract_Ends":"Окончание контракта","Contract_Details":"Подробности контракта","Target":"Цель","Contract_Information":"Детали контракта","Contract_Type":"Вид контракта","Transaction_ID":"Номер контракта","Remaining_Time":"Оставшееся время","Maximum_payout":"Макс. выплата","Barrier_Change":"Изменение барьера","Current":"Текущие","Spot_Time":"Спот-время","Current_Time":"Текущее время","Indicative":"Ориентировочная цена","Potential_Profit/Loss":"Потенциальная прибыль/убыток","Deal_Cancel__Fee":"Комиссия за отмену сделки","You_can_close_this_window_without_interrupting_your_trade_":"Закрытие этого окна не повлияет на ваш трейдинг.","There_was_an_error":"Произошла ошибка","Sell_at_market":"Продать по текущей цене","Note":"Примечание","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"Контракт будет продан по цене, действующей на момент получения запроса нашими серверами. Эта цена может отличаться от указанной в настоящее время.","You_have_sold_this_contract_at_[_1]_[_2]":"Вы продали данный контракт по цене [_1] [_2]","Your_transaction_reference_number_is_[_1]":"Номер вашей транзакции: [_1]","Thank_you_for_signing_up!_Please_check_your_email_to_complete_the_registration_process_":"Спасибо за регистрацию! Теперь проверьте электронную почту, чтобы завершить процесс.","All_markets_are_closed_now__Please_try_again_later_":"В данное время все рынки закрыты. Пожалуйста, попробуйте позже.","Withdrawal":"Вывод","virtual_money_credit_to_account":"виртуальных денег на счёт","login":"вход","logout":"выход","Asians":"Азиатские","Call_Spread/Put_Spread":"Колл спред/Пут спред","Digits":"Цифровые","Ends_Between/Ends_Outside":"Закончится внутри/вне","High/Low_Ticks":"Наибольший/наименьший тик","Lookbacks":"Oпционы Lookback","Reset_Call/Reset_Put":"Reset колл/Reset пут","Stays_Between/Goes_Outside":"Останется внутри/вне","Touch/No_Touch":"Касание/Нет касания","Christmas_Day":"Рождество","Closes_early_(at_18:00)":"Закрывается рано (в 18:00)","Closes_early_(at_21:00)":"Закрывается рано (в 21:00)","Fridays":"пятница","New_Year's_Day":"Новый год","today":"сегодня","today,_Fridays":"сегодня, по пятницам","There_was_a_problem_accessing_the_server_":"Возникла проблема с доступом к серверу.","There_was_a_problem_accessing_the_server_during_purchase_":"Возникла проблема с доступом к серверу во время процесса покупки."};