<template>
  <div class="container-fluid">
      <h3>图标:</h3>
      <Icon name="plus" size="20"></Icon>
      <Icon name="star" size="20"></Icon>
      <hr>

      <h3>按钮:</h3>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
      <Button type="info">Info</Button>
      <Button type="link">Link</Button>
      <Button icon="star">ICON</Button>
      <br>
      <br>
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button>default</Button>
      <Button size="lg">lg</Button>
      <br>
      <br>
      <Button type="primary" disabled>Disabled</Button>
      <Button type="link" disabled>Disabled</Button>
      <br>
      <br>
      <Button type="primary" long>Long</Button>
      <hr>

      <h3>按钮组:</h3>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </ButtonGroup>
      <hr>

      <h3>按钮工具栏:</h3>
      <ButtonToolBar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
        </ButtonGroup>
      </ButtonToolBar>
      <hr>

      <h3>标签:</h3>
      <Label>Default</Label>
      <Label type="primary">Primary</Label>
      <Label type="success">Success</Label>
      <Label type="info">Info</Label>
      <Label type="warning">Warning</Label>
      <Label type="danger">Danger</Label>
      <hr>

      <h3>徽章:</h3>
      <Badge></Badge>
      <a href="#">
        Inbox
        <Badge>2</Badge>
      </a>
      <Button type="primary">
        Messages
        <Badge>3</Badge>
      </Button>
      <hr>

      <h3>警告框:</h3>
      <Alert 
        type="success" 
        link="链接文本" 
        closable
        @link-click="alertLinkClick"
        @on-close="alertClose">
        <template slot="strong">Strong Slot</template> 
        Success
      </Alert>
      <Alert type="info">
        Info
      </Alert>
      <Alert type="warning">
        Warning
      </Alert>
      <Alert type="danger">
        Danger
      </Alert>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    alertLinkClick() {
      alert("alert-link-click")
    },
    alertClose() {
      alert("alertClose")
    }
  }
}
</script>