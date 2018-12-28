<template>
  <div class="container-fluid">
      <Icon name="plus" size="20"></Icon>
      <Icon name="star" size="20"></Icon>
      <hr>

      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="success">按钮</Button>
      <Button icon="star">按钮(带ICON)</Button>
      <hr>

      <ButtonToolBar>
        <ButtonGroup>
          <Button type="primary">按钮</Button>
          <Button type="success">按钮</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button type="danger">按钮</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>按钮</Button>
        </ButtonGroup>
      </ButtonToolBar>
      <hr>

      <Label type="warning">1</Label>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>