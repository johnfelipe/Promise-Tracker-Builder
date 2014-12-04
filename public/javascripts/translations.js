var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","already_confirmed":"was already confirmed, please try signing in","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}},"sorry":"Sorry!","resource_not_found":"We couldn't find that page","forbidden":"Access not unauthorized","internal_error":"Something went wrong..."},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}},"models":{"user":{"attributes":{"password":{"too_short":null,"blank":null},"password_confirmation":{"confirmation":null},"username":{"taken":null,"blank":null}}},"campaign":{"attributes":{"title":{"too_short":null}}}}},"models":{"survey":"Survey","campaign":"Campaign","input":"Input","user":"User"},"attributes":{"campaign":{"title":"Name","goal":"Goal","submissions_target":"Number of desired responses","data_collectors":"Campaign team","audience":"Target audience","status":"Status","start_date":"Start date","end_date":"End date","theme":"Theme"},"input":{"input_type":"Type of response"},"survey":{"title":null},"user":{"username":"Username","bio":"Bio / Description","password":"Password","password_confirmation":"Password confirmation","current_password":"Current password","email":"Email"}},"options":{"themes":{"select":"Select","economics":"Economic Development","education":"Education","housing":"Housing","environment":"Environment","health":"Health","infrastructure":"Infrastructure","energy":"Eletricity","other":"Other"},"input_types":{"text":"Text","number":"Number","date":"Date","yes_no":"Yes/No","select1":"Select one","select":"Select many","location":"Location","image":"Image"}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"update":{"notice":"%{resource_name} was successfully updated."},"destroy":{"notice":"%{resource_name} was successfully destroyed.","alert":"%{resource_name} could not be destroyed."}}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed.","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid email or password.","locked":"Your account is locked.","last_attempt":"You have one more attempt before your account will be locked.","not_found_in_database":"Invalid username or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.","updated":"You updated your account successfully.","edit":{"cancel_account":"Cancel my account","cancel_account_text":"Want to delete your account? Once deleted, no account data can be retrieved."}},"sessions":{"signed_in":"Signed in successfully.","signed_out":"Signed out successfully.","already_signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."},"sign_in":"Sign in","sign_out":"Sign out","sign_up":"Create an account","create_account":"Create account","existing_account":"Already have an account?","remember_me":"Remember me","forgot_password":"Forgot your password?","cancel_account":"Cancel account","are_you_sure":"Are you sure?"},"app_name":"Promise Tracker","defaults":{"yes_option":"Yes","no_option":"No","save":"Save","cancel":"Cancel","download":"Download","edit":"Edit","close":"Close","copy":"Copy","delete":"Delete","back":"Back","loading":"Loading","validations":{"required":"This field is required.","number":"Please enter a valid number.","question_blank":"The question text can't be blank.","no_options":"You must add at least one answer option","has_errors":"Please correct all errors on your form before continuing","no_errors":"Your form looks ready to go!","confirm_save":"Your changes have been saved."}},"layouts":{"header":{"home":"Home"}},"home":{"index":{"welcome":"Get started","tag_line":"Data collection for civic action","project_description":"Promise Tracker is a citizen monitoring platform designed to help communities track local issues \u0026 initiatives and advocate for greater accountability. The Promise Tracker tools allow users to identify key issues that affect their daily lives, organize local data collection campaigns, and create compelling visualizations to drive positive social change.","process_line":"Strategic, community-driven advocacy","process_description":null,"phase_1_title":"Define objective \u0026 build survey","phase_1_description":"Develop the strategy for your data collection campaign by identifying key objectives and the target audiences for collected data. Build a custom survey for use in data collection.","phase_2_title":"Collect data","phase_2_description":"Gather photos, locations, and responses from the field with the mobile app. Track incoming responses online and access guides to help organize \u0026 mobilize data collectors.","phase_3_title":"Share data","phase_3_description":"View collected data in a variety of formats including maps, image galleries, graphs, and data reports to share with key stakeholders both online and offline.","create_account":"Create a free account"},"download":{"download_link":"Download the mobile app","app_description":"With the Promise Tracker mobile app you can fill out surveys and collect data in your community!"}},"campaigns":{"status":{"active":"Active","closed":"Closed","draft":"Draft","copy":"copy"},"nav":{"view_survey":"View survey","monitor_responses":"Monitor responses","share_data":"Share data"},"activate":{"upload_error":"Sorry. Your survey not be published at this time. Please try again.","upload_success":"Your survey has been successfully published!"},"index":{"new_campaign":"Start a new campaign","my_campaigns":"My Campaigns","greeting":"Hello","welcome_text":"Welcome to Promise Tracker!","get_started":"Get started by creating your first data collection campaign."},"new":{"modal_title":"New Campaign","campaign_theme":"What issue are you interested in monitoring?","campaign_title":"Name of campaign","title_placeholder":"Name","create_campaign":"Create"},"launch":{"launch_title":"Launch page","info":"Info on launching your campaign","launch_explanation_1":"In order to start collecting data, you'll need to publish your survey form.","launch_explanation_2":"Once published, the survey questions can no longer be edited or modified.","launch_explanation_3":"In the next step, you will review your goals and survey form to make sure your information is correct.","review_goals":"Review your objectives","review_goals_info":"You defined the following goals for this campaign. Do they still look appropriate?","review_survey":"Review your survey","launch":"Publish","return_to_edit":"Edit survey","preview":"Preview on phone","launch_campaign":"Publish this survey","launch_info":"Once you publish your survey questions will be finalized.","launch_confirmation":"Are you sure you want to publish?","edit_campaign":"Edit campaign"},"monitor":{"status_text":"This survey is ","survey_code":"Download and fill out this survey with code","close_confirmation":"Once closed, this survey cannot be opened again.","number_of_responses":"Number of responses","close":"Close camaign","responses":"Responses","current":"Current","target":"Target","publicize_form":"Mobilize your community to fill out the survey","campaign_resources":"How-to guides","guide_1":"Organize a launch event","guide_2":"Keep your community engaged","guide_3":"Visualize your responses"},"share":{"visualize_data":"Visualize your data","map":"Map","photos":"Photos","graphs":"Graphs","graph_placeholder":"Once survey results have been collected, you'll be able to view the data aggregates here.","share_data":"Share your data online","data_reports":"Data reports","contact":"Contact person","learn_more":"Learn more about this campaign at "},"list_item":{"confirm_delete":"Are you sure you want to delete this campaign?","confirm_clone":"Are you sure you want to duplicate this campaign?"},"edit":{"edit_title":"Edit name","define_goals":"Define your goals","type_number":"Type a number","explanations":{"goal":"What do you hope to achieve with this campaign? What change do you want to see?","data_collectors":"Who will you collect data with the survey you develop?","submissions_target":"How many submissions do you hope to get?","audience":"Who do you plan to share your data with in order to change this issue?"},"tooltip":"Tip","tips":{"goal":"Social change often requires many small steps. Are there any small and concrete changes that you think could be achievable in the near future?","data_collectors":"Who do you know in your community that might be interested in this issue that could help collect data?","submissions_target":"Sometimes, just a few data points is not convincing. Think about how many responses you might need to accurately represent your issue, and how many will be reasonable to collect within the time frame you specify.","audience":"There are many audiences you may want to address with the data you collect. Who will be most interested in this data? Could you reach a new audience who is not already familiar with this issue? Who will be the most difficult to convince to make the change that you want to see?"}},"form_buttons":{"back":"Back","next":"Next"},"show":{"campaign_goals":"Description","campaign_survey":"Survey","edit_campaign":"Edit campaign","edit_survey":"Edit survey","monitor_progress":"Monitor responses","launch_survey":"Publish","create_survey":"Create a survey for this campaign"}},"surveys":{"android_preview":{"preview_title":"Phone preview for:","no_questions":"No questions","add_questions":"Choose a question type above to get started.","question":"Question","of":"of","close_preview":"Close preview"},"survey_body":{"required":"Question required?","annotation":"Allow annotation?","options":"Options","add_new_option":"Click to add an option","question_label":"Question text","question_placeholder":"Type your question here","answer_type":"Type of answer","first_question":"Your first question","preview":{"date":"13 Jan, 2014","number":"123","string":"Abc"}},"survey_builder":{"untitled":"Untitled","survey_title":"Survey title","title_placeholder":"Type survey title here","editor_title":"Toolbar","add_question":"Add question","add_location":"Record location","add_image":"Take photo","option_1":"Option 1","preview_title":"Preview","show_preview":"Show preview","hide_preview":"Hide preview","confirm_input_delete":"Are you sure you want to delete this input?"}},"users":{"show":{"add_email":"Add email","edit_profile":"Edit profile"}}},"pt-BR":{"devise":{"confirmations":{"confirmed":"Sua conta foi confirmada com sucesso.","send_instructions":"Você receberá um email para confirmar sua conta em alguns minutis.","send_paranoid_instructions":"Caso seu endereço de email já exista em nossa base, você receberá um email com instruções sobre como ativar sua conta."},"failure":{"already_authenticated":"Você já está logado.","inactive":"Sua conta ainda não foi ativada.","invalid":"Email ou senha inválidos.","locked":"Sua conta está travada.","last_attempt":"Você tem mais uma tentativa antes que sua conta seja travada.","not_found_in_database":"Email ou senha inválidos.","timeout":"Para sua segurança sua sessão expirou. Por favor, faça login novamente.","unauthenticated":"Você precisa se logar ou registrar antes de prosseguir.","unconfirmed":"Você precisa confirmar sua conta antes de prosseguir."},"mailer":{"confirmation_instructions":{"subject":"Instruções para confirmação"},"reset_password_instructions":{"subject":"Instruções para reiniciar sua senha"},"unlock_instructions":{"subject":"Instruções para destravar sua senha"}},"omniauth_callbacks":{"failure":"Não pudemos autenticá-lo em %{kind} por causa de \"%{reason}\".","success":"Autenticado com sucesso na conta %{kind}."},"passwords":{"no_token":"Você não pode acessar essa página vindo do email para reiniciar sua senha. Se você está vindo do email para reiniciar sua senha, por favor, certifique-se de estar usando a URL correta.","send_instructions":"Você receberá um email com instruções de como reiniciar sua senha em alguns minutos.","send_paranoid_instructions":"Se o seu endereço de email estiver em nossa base de dados, em alguns minutos você receberá um link para recuperar sua senha em seu email.","updated":"Você alterou sua senha com sucesso. Você está logado.","updated_not_active":"Sua senha foi alterado com sucesso."},"registrations":{"destroyed":"Até mais! Sua conta foi cancelada com sucesso. Esperamos vê-lo novamente em breve.","user":{"signed_up":"Bem-vindo! Você se registrou com sucesso.","signed_up_but_inactive":"Você se registrou com sucesso. No entanto, não podemos logá-lo, pois você ainda não ativou sua conta.","signed_up_but_locked":"Você se registrou com sucesso. No entanto, não podemos logá-lo, pois sua conta está travada.","signed_up_but_unconfirmed":"Uma mensagem com um link de confirmação foi enviada para seu endereço de email. Por favor abra o link para ativar sua conta.","update_needs_confirmation":"Sua conta foi atualizada, mas precisamos verificar seu endereço de email. Por favor cheque seu email e clique no link de confirmação para confirmar seu novo endereço de email."},"updated":"Você atualizou sua conta com sucesso.","edit":{"cancel_account":"Cancelar conta","cancel_account_text":"Você desejar eliminar a sua conta? Uma vez eliminado, seus dados não poden se recuperar."}},"sessions":{"user":{"signed_in":"Logado com sucesso.","signed_out":"Saiu com sucesso."}},"unlocks":{"send_instructions":"Você receberá um email com instruções sobre como destravar sua conta em alguns minutos.","send_paranoid_instructions":"Se sua conta existir, você receberá um email com instruções sobre como destravá-la em alguns minutos.","unlocked":"Sua conta foi destrava com sucesso. Por favor, faça login para continuar."},"sign_in":"Fazer login","sign_out":"Sair","sign_up":"Criar uma conta","create_account":"Criar conta","existing_account":"Você já tem uma conta?","remember_me":"Remember me","forgot_password":"Esqueceu sua senha?","cancel_account":"Cancelar conta","are_you_sure":"Você tem certeza?"},"errors":{"messages":{"already_confirmed":"já foi confirmada, por favor faça login","confirmation_period_expired":"precisa ser confirmada dentro de %{period}, por favor peça uma nova","expired":"expirou, por favor solicite uma nova","not_found":"não encontrada","not_locked":"não estava travada","not_saved":{"one":"1 erro impediu a gravação de %{resource}:","other":"%{count} erros impediram a gravação de %{resource}:"}},"sorry":"Desculpe!","resource_not_found":"Não conseguimos encontrar essa página","forbidden":"Accesso não autorizado","internal_error":"Algo aconteceu"},"app_name":"Monitorando a Cidade","activerecord":{"errors":{"models":{"user":{"attributes":{"password":{"too_short":"deve ter pelo menos 8 caracteres","blank":"não pode estar em branco"},"password_confirmation":{"confirmation":"não coincide com a senha"},"username":{"taken":"já existe. Por favor, escolha outro nome de usuário","blank":"não pode estar em branco"}}},"campaign":{"attributes":{"title":{"too_short":"deve ter pelo menos 5 caracteres"}}}}},"models":{"survey":"Formulário","campaign":"Acão","input":"Pergunta","user":"Usuário"},"attributes":{"campaign":{"title":"Nome","goal":"Objetivo","submissions_target":"Número de participações","data_collectors":"Colaboradores","audience":"Destinário","status":"Estado","start_date":"Data de publicação","end_date":"Data final","theme":"Tema"},"input":{"input_type":"Tipo de resposta"},"survey":{"title":"Título"},"user":{"username":"Nome de usuário","bio":"Biografia / Descrição","password":"Senha","password_confirmation":"Confirmação de senha","current_password":"Senha atual","email":"E-mail"}},"options":{"themes":{"select":"Selecionar","economics":"Desenvolvimento social","education":"Educação","housing":"Habitação","environment":"Meio ambiente","health":"Saúde","infrastructure":"Infra-estrutura","energy":"Eletricidade","other":"Outra"},"input_types":{"text":"Texto","number":"Número","date":"Data","yes_no":"Sim/Não","select1":"Selecionar uma","select":"Selecionar várias","location":"Localização","image":"Imagem"}}},"defaults":{"yes_option":"Sim","no_option":"Não","save":"Salvar","cancel":"Cancelar","download":"Baixar","edit":"Editar","close":"Fechar","copy":"Duplicar","delete":"Eliminar","back":"Voltar","loading":"Carregando dados","validations":{"required":"Este campo \u0026eacute; requerido.","number":"Por favor, forne\u0026ccedil;a um n\u0026uacute;mero v\u0026aacute;lido.","question_blank":"O texto da pergunta não pode estar em branco.","no_options":"Você precisa adicionar pelo menos uma opção","has_errors":"Seu formulário tem algum erro. Por favor corrija as questões com erros antes de continuar","no_errors":"Seu formulário não tem erros.","confirm_save":"Suas modificações foram salvadas"}},"layouts":{"header":{"home":"Página inicial"}},"home":{"index":{"welcome":"Começar com Promise Tracker","tag_line":"Coleta de dados para a ação cívica","project_description":"Monitorando a Comunidade é uma plataforma de monitoramento desenhada para ajudar comunidades, indivíduos e organizações da sociedade civil a monitorar ações locais do poder público e, desta forma, demandar uma maior responsabilidade cívica dos gestores e políticos. As ferramentas do Monitorando as Metas ajudam cidadãos a identificar temas importantes que afetam sua vida cotidiana, a organizar campanhas locais de coleta de dados e a criar visualizações interessantes para promover transformações sociais positivas.","process_line":"O Nosso Processo","process_description":null,"phase_1_title":"Definir objectivos \u0026 criar formulário","phase_1_description":"","phase_2_title":"Coletar dados no campo","phase_2_description":"","phase_3_title":"Compartilhar \u0026 visualizer dados","phase_3_description":"","create_account":"Criar uma conta gratuita"},"download":{"download_link":"Baixar o aplicativo móvel","app_description":"Com o aplicativo móvel, você pode preencher formulários criados com Promise Tracker e coletar dados!"}},"campaigns":{"status":{"active":"Público","closed":"Fechado","draft":"Rascunho","copy":"cópia"},"nav":{"view_survey":"Ver formulário","monitor_responses":"Monitorar registros","share_data":"Compartilhar dados"},"activate":{"upload_error":"Disculpe. Seu formulário não poderia ser publicado.","upload_success":"Seu formulário foi publicado com sucesso!"},"index":{"new_campaign":"Criar uma nova ação","my_campaigns":"Minhas ações","greeting":"Oi","welcome_text":"Bem-vindo ao site Monitorando a Cidade!","get_started":"Que tal criar sua primeira açāo?"},"new":{"modal_title":"Nova ação","campaign_theme":"Qual é o tema que interessa você?","campaign_title":"Nome da ação","title_placeholder":"Nome da ação","create_campaign":"Criar"},"launch":{"launch_title":"Página de publicação","info":"Info","launch_explanation_1":"Para poder coletar dados, você tornará seu formulário público.","launch_explanation_2":"Uma vez publicado, o formulário não pode ser modificado.","launch_explanation_3":"Você vai rever seus objetivos e seu formulário para verificar se tudo está correto.","review_goals":"Rever seus objetivos","review_goals_info":"Você definiu este objetivo para sua ação. Ainda concorda com ele?","review_survey":"Rever seu formulário","launch":"Publicar","return_to_edit":"Editar formulário","preview":"Pré-visualização no celular","launch_campaign":"Publicar este formulário","launch_info":"Quando você publica este formulário, não poderá editá-lo mais.","launch_confirmation":"Tem certeza que deseja publicar este formulário?","edit_campaign":"Editar ação"},"monitor":{"status_text":"Este formulário está ","survey_code":"Pode baixar e preencher este formulário usando o código","close_confirmation":"Se você fecha este formulário, não pode publicar-lo novamente.","number_of_responses":"Número de registros","close":"Fechar esta ação","responses":"registros","current":"Atual","target":"Desejado","publicize_form":"Mobilizar os amigos para coletar dados","campaign_resources":"Guias","guide_1":"Organizar um evento de lançamento","guide_2":"Manter sua comunidade envolvida","guide_3":"Vizualizar seus resultados"},"share":{"visualize_data":"Vizualizar seus dados","map":"Mapa","photos":"Fotos","graphs":"Gráficos","graph_placeholder":"Quando tiver registros, vai poder visualizer o agregado dos dados aqui.","share_data":"Compartilhar seus dados","data_reports":"Relatório de dados","campaign_organizers":"Realizadores da ação","learn_more":"Aprender mais sobre esta ação no site"},"list_item":{"confirm_delete":"Você tem certeza que quer eliminar esta ação?","confirm_clone":"Você em certeza que quer duplicar esta ação?"},"edit":{"edit_title":"Editar nome","define_goals":"Definir seus objetivos","type_number":"Digite um Número","explanations":{"goal":"O que você quer realizar com esta ação? O que você quer mudar na sua comunidade?","data_collectors":"Quem vai coletar os dados com o formulário que você vai criar?","submissions_target":"Quantas participações você espera?","audience":"Para transformar a realidade, com quem você vai compartilhar os dados coletados?"},"tooltip":"Dica","tips":{"data_collectors":"Talvez sejam necessárias muitas pessoas para coletar os dados. Entre seus conhecidos, quem já está comprometido com a solução deste problema? Quem toparia trabalhar com você nesta campanha?","goal":"Mudanças sociais normalmente começam com pequenos passos. O que é possível alcançar no futuro próximo no tema escolhido?","submissions_target":"Pense em quantos registros você deve obter para ter uma amostra representativa do problema e quantas você consegue coletar no intervalo de tempo de que dispõe.","audience":"Existem muitos destinatários possíveis. Quem terá maior interesse nestes dados? Quais públicos utilizariam seus dados para promover uma mudança real?"}},"form_buttons":{"back":"Voltar","next":"Próximo"},"show":{"campaign_goals":"Descrição","campaign_survey":"Formulário","edit_campaign":"Editar ação","edit_survey":"Editar formulário","monitor_progress":"Monitorar os registros","launch_survey":"Publicar","create_survey":"Criar o formulário para esta ação"}},"surveys":{"android_preview":{"preview_title":"Pré-visualização no celular:","no_questions":"Formulário vazio","add_questions":"Escolha uma das opções acima para começar.","question":"Pergunta","of":"de","close_preview":"Fechar pré-visualização"},"survey_body":{"required":"Pergunta obrigatoria?","annotation":"Permitir anotação?","options":"Opções","add_new_option":"Clique para adicionar uma opção","question_label":"Texto da pergunta","question_placeholder":"Digite a pergunta aqui","answer_type":"Tipo de resposta","first_question":"A sua primeira pergunta...","preview":{"date":"13 Jan, 2014","number":"123","string":"Abc"}},"survey_builder":{"untitled":"Sem títiulo","survey_title":"Título do formulário","title_text":"Digite o títiulo aqui","editor_title":"Barra de Ferramentas","add_question":"Adicionar pergunta","add_location":"Obter localização","add_image":"Obter foto","option_1":"Opção 1","preview_title":"Pré-visualização","show_preview":"Mostrar pré-visualização","hide_preview":"Esconder pré-visualização","confirm_input_delete":"Tem certeza que deseja eliminar este campo?"}},"users":{"show":{"add_email":"Adicionar e-mail","edit_profile":"Editar perfil"}}}};