<template>
  <div>
    <h2>TS is working with Strapi throught GraphQL</h2>
    <el-row>
      <el-col
        v-for="(note, index) in notes"
        :key="note.id"
        :span="8"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <h2>{{ note.title }}</h2>
            <p>{{ note.body }}</p>
            <div class="bottom clearfix">
              <time class="time">{{ note.created_at }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import 'vue-apollo';
import { Vue, Component } from 'vue-property-decorator';
import { Notes } from '../types/types';
import NotesQueryGQL from '~/apollo/queries/notes.graphql';

@Component({
  apollo: {
    notes: {
      query: NotesQueryGQL,
      variables: {}
    }
  }
})
export default class HomePage extends Vue {
  notes: Notes = [];
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
