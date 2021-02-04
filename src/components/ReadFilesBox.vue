<template>
  <div>
    <b-form @submit.prevent="loadFiles">
      <b-form-row>
        <b-col cols="12" md="6">
          <b-form-group
            label="入力ファイル"
            label-for="form_inputFile"
          >
            <b-form-file
              v-model="inputFile"
              :state="Boolean(inputFile)"
              id="form_inputFile"
              placeholder="ファイルを選択 or ドラッグ&ドロップ"
              drop-placeholder="ドラッグ&ドロップしてください"
              required
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            label="出力ファイル"
            label-for="form_outputFile"
          >
            <b-form-file
              v-model="outputFile"
              :state="Boolean(outputFile)"
              id="form_outputFile"
              placeholder="ファイルを選択 or ドラッグ&ドロップ"
              drop-placeholder="ドラッグ&ドロップしてください"
              required
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-button type="submit" variant="primary">読み込む</b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputFile: null,
      outputFile: null,
    }
  },
  methods: {
    async loadFiles() {
      await Promise.all([
        this.parseInputFile(),
        this.parseOutputFile(),
      ])
    },
    async parseInputFile() {
      const text = await this.inputFile.text()
      await this.$store.dispatch('input/scan', text)
    },
    async parseOutputFile() {
      const text = await this.outputFile.text()
      console.log(text.split(/\s+/))
    },
  },
}
</script>
