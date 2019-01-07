<style>
.col-example {
  background-color: rgba(86,61,124,.15);
  text-align: center;
  border: 1px solid rgba(86,61,124,.2)
}
</style>

<template>
  <div>

      <b-container>

        <h3>下拉菜单:</h3>
        <b-drop-down>
          下拉菜单

          <template slot="list">
            <b-drop-down-item>
              Action1
            </b-drop-down-item>

            <b-drop-down-item>
              <template slot="header">Dropdown Header</template>
              Action2
            </b-drop-down-item>

            <b-drop-down-item divider>
              Action3
            </b-drop-down-item>

            <b-drop-down-item disabled>
              Action4
            </b-drop-down-item>

          </template>
        </b-drop-down> 

        <hr>

        <h3>标签页:</h3>
        <b-tab value="tab1">
          <b-tab-item name="tab1">
            Tab 1 Slot 
          </b-tab-item>
          <b-tab-item name="tab2">
            Tab 2 Slot
          </b-tab-item>
          <b-tab-item name="tab3">
            Tab 3 Slot
          </b-tab-item>
          <b-tab-item name="tab4" disabled>
            Tab 4 Disabled
          </b-tab-item>
        </b-tab>
        <hr>

        <h3>布局:</h3>
        <b-row>
          <b-col class="col-example" :md="4">col-md-4</b-col>
          <b-col class="col-example" :md="4">col-md-4</b-col>
          <b-col class="col-example" :md="4">col-md-4</b-col>
        </b-row>
        <br>
        <b-row>
          <b-col class="col-example" :md="{span: 8}">col-md-8</b-col>
          <b-col class="col-example" :md="4">col-md-4</b-col>
        </b-row>
        <br>
        <b-row>
          <b-col class="col-example" :md="4">col-md-4</b-col>
          <b-col class="col-example" :md="{span: 4, offset: 4}">col-md-4 col-md-offset-4</b-col>
        </b-row>
        <hr>

        <h3>分页:</h3>
        <b-page :total-count="102" :current="1" size="lg"></b-page>
        <b-page :total-count="86" :current.sync="current" @page-change="pageChange"></b-page>
        <b-page :total-count="102" :current="1" size="sm"></b-page>
        <hr>

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
          @link-click="click('clicked')"
          @on-close="click('closed')">
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
        <b-bread-crumb>
          <b-bread-crumb-item>
            <a href="javascript:;">Home</a>
          </b-bread-crumb-item>
          <b-bread-crumb-item>
            <a href="javascript:;">Library</a>
          </b-bread-crumb-item>
          <b-bread-crumb-item>
            Data
          </b-bread-crumb-item>
        </b-bread-crumb>
        <hr>

        <h3>图片:</h3>
        <b-image
          shape="thumb"
          src="//tvax1.sinaimg.cn/crop.0.0.1342.1342.180/006OyqbNly8fka2xep3duj311a11ajv9.jpg" 
          alt="壮壮" 
          title="壮壮">
        </b-image>
        <b-image
          shape="circle"
          src="//tvax1.sinaimg.cn/crop.0.0.1342.1342.180/006OyqbNly8fka2xep3duj311a11ajv9.jpg" 
          alt="壮壮" 
          title="壮壮">
        </b-image>
        <b-image
          shape="round"
          src="//tvax1.sinaimg.cn/crop.0.0.1342.1342.180/006OyqbNly8fka2xep3duj311a11ajv9.jpg" 
          alt="壮壮" 
          title="壮壮">
        </b-image>
        <hr>

        <h3>列表组:</h3>
        <b-list-group>
          <b-list-group-item>Type: default</b-list-group-item>
          <b-list-group-item type="success">Type: success</b-list-group-item>
          <b-list-group-item type="danger">Type: Success</b-list-group-item>
          <b-list-group-item tag="a" type="info">Tag: a & Type: info</b-list-group-item>
          <b-list-group-item tag="button" type="warning">Tag: button & Type: warning</b-list-group-item>
        </b-list-group>

        <b-list-group>
          <b-list-group-item active>active</b-list-group-item>
          <b-list-group-item disabled>disabled</b-list-group-item>
          <b-list-group-item @click="click('clicked')">click listener</b-list-group-item>
        </b-list-group>

        <b-list-group>
          <b-list-group-item active>
            <template slot="header">
              List group item heading
            </template>
            <template slot="content">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </template>
          </b-list-group-item>
          <b-list-group-item>
            <template slot="header">
              List group item heading
            </template>
            <template slot="content">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </template>
          </b-list-group-item>
          <b-list-group-item>
            <template slot="header">
              List group item heading
            </template>
            <template slot="content">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </template>
          </b-list-group-item>
        </b-list-group>
        <hr>

        <h3>面板:</h3>
        <b-panel type="primary">
          <template slot="header">Panel heading without title</template>
          <template slot="body">
            ListGroup In Panel Body:
            <b-list-group>
              <b-list-group-item>2</b-list-group-item>
              <b-list-group-item>3</b-list-group-item>
              <b-list-group-item>4</b-list-group-item>
            </b-list-group>
          </template>
          ListGroup Out Panel Body:
          <b-list-group>
            <b-list-group-item>2</b-list-group-item>
            <b-list-group-item>3</b-list-group-item>
            <b-list-group-item>4</b-list-group-item>
          </b-list-group>
          <template slot="footer">Panel Footer</template>
        </b-panel>

        <b-panel type="info">
          <template slot="title">Panel Title</template>
          <template slot="body">Panel Body</template>
          <template slot="footer">Panel Footer</template>
        </b-panel>
        <hr>
      </b-container>

  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      current: 3
    }
  },

  methods: {
    click(msg) {
      alert(msg)
    },

    pageChange(page) {
      console.log(page)
    }
  }
}
</script>