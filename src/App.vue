<template>
  <div>

      <h3>容器:</h3>
      <b-container fluid style="background-color: #f7f7f9; height: 100px; border: 1px solid #e1e1e8;">container-fluid</b-container>
      <br>
      <b-container style="background-color: #f7f7f9; height: 100px; border: 1px solid #e1e1e8;">container</b-container>
      <hr>

      <b-container>
        <h3>图标:</h3>
        <b-icon name="plus" size="20"></b-icon>
        <b-icon name="star" size="20"></b-icon>
        <hr>

        <h3>按钮:</h3>
       <b-button>Default</b-button>
        <b-button type="primary">Primary</b-button>
        <b-button type="success">Success</b-button>
        <b-button type="warning">Warning</b-button>
        <b-button type="danger">Danger</b-button>
        <b-button type="info">Info</b-button>
        <b-button type="link">Link</b-button>
        <b-button icon="star">ICON</b-button>
        <br>
        <br>
        <b-button size="xs">xs</b-button>
        <b-button size="sm">sm</b-button>
        <b-button>default</b-button>
        <b-button size="lg">lg</b-button>
        <br>
        <br>
        <b-button type="primary" disabled>Disabled</b-button>
        <b-button type="link" disabled>Disabled</b-button>
        <br>
        <br>
        <b-button type="primary" long>Long</b-button>
        <hr>

        <h3>按钮组:</h3>
        <b-button-group>
          <b-button>1</b-button>
          <b-button>2</b-button>
          <b-button>3</b-button>
          <b-button>4</b-button>
          <b-button>5</b-button>
        </b-button-group>
        <hr>

        <h3>按钮工具栏:</h3>
        <b-buttonToolBar>
          <b-button-group>
            <b-button>1</b-button>
            <b-button>2</b-button>
            <b-button>3</b-button>
          </b-button-group>

          <b-button-group>
            <b-button>4</b-button>
            <b-button>5</b-button>
            <b-button>6</b-button>
          </b-button-group>

          <b-button-group>
            <b-button>7</b-button>
            <b-button>8</b-button>
            <b-button>9</b-button>
          </b-button-group>
        </b-buttonToolBar>
        <hr>

        <h3>标签:</h3>
        <b-label>Default</b-label>
        <b-label type="primary">Primary</b-label>
        <b-label type="success">Success</b-label>
        <b-label type="info">Info</b-label>
        <b-label type="warning">Warning</b-label>
        <b-label type="danger">Danger</b-label>
        <hr>

        <h3>徽章:</h3>
        <b-badge></b-badge>
        <a href="#">
          Inbox
          <b-badge>2</b-badge>
        </a>
        <b-button type="primary">
          Messages
          <b-badge>3</b-badge>
        </b-button>
        <hr>

        <h3>警告框:</h3>
        <b-alert 
          type="success" 
          link="链接文本" 
          closable
          @link-click="alertLinkClick"
          @on-close="alertClose">
          <template slot="strong">强调文本</template> 
          Success
        </b-alert>
        <b-alert type="info" closable>
          Info
        </b-alert>
        <b-alert type="warning">
          Warning
        </b-alert>
        <b-alert type="danger">
          Danger
        </b-alert>
        <hr>

        <h3>路径导航:</h3>
        <b-bread-crumb></b-bread-crumb>
        <hr>

        <h3>图片:</h3>
        <b-image src="//tvax1.sinaimg.cn/crop.0.0.1342.1342.180/006OyqbNly8fka2xep3duj311a11ajv9.jpg" alt="壮壮" title="壮壮"></b-image>
        <hr>

      </b-container>

  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    alertLinkClick() {
      alert("b-alert-link-click")
    },
    alertClose() {
      alert("b-alertClose")
    }
  }
}
</script>