##  Repositório para acompanhar o curso da Alura: _[React Native: Design System no seu app](https://cursos.alura.com.br/course/react-native-design-system)_
Instrutor: [Eduardo Shinkawa](https://www.linkedin.com/in/eshinkawa/)

### Algumas considerações:
- O curso utiliza React Native na versão 0.60, por problemas na coniguração inicial, neste repo será usada a útima versão (0.64) por ter a documentação mais atualizada.
- Curso está sendo realizado somento no Windows e com emulador Android.
- &ast;Acredito que por estar usando uam versão 0.60+ foi necessário seguir os passos [desse artigo](https://medium.com/@aravindmnair/add-custom-fonts-to-react-native-0-60-easily-in-3-steps-fcd71459f4c9):
   - Criar o _react-native.config.js_ na raíz do projeto
   - Executar o comando yarn react-native link antes de iniciar a aplicação 
  &ast; Na verdade, essas instruções estavam no item 02 do módulo 03 (Navegação e estilos universais)

Módulo 03 (Navegação e estilos universais):
- Ação necessária que estava descrito no vídeo (item 03) mas não na transcrição do item 02 do  
   - Executar o yarn add @react-navigate/stack 

### Setup inicial:
 - Configuração inicial realizada seguindo a documentação oficial&ast;: [Setting up the development environment](https://reactnative.dev/docs/environment-setup)
    - &ast; Com um acrescimo: Tive que adicionar a variável de ambiente **ANDROID_SDK_ROOT** com o mesmo valor da variável **ANDROID_HOME**  
