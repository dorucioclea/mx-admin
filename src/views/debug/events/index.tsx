import { useLocalStorage } from '@vueuse/core'
import { useAsyncLoadMonaco, usePropsValueToRef } from 'hooks/use-async-monaco'
import { ContentLayout } from 'layouts/content'
import { TwoColGridLayout } from 'layouts/two-col'
import { NButton, NForm, NFormItem, NGi, NSelect } from 'naive-ui'
import { EventTypes } from 'socket/types'
import { RESTManager } from 'utils'

const generateFakeData = (type: string) => {
  switch (type) {
    case 'objectId':
      return ((m = Math, d = Date, h = 16, s = (s) => m.floor(s).toString(h)) =>
        s(d.now() / 1000) +
        ' '.repeat(h).replace(/./g, () => s(m.random() * h)))()
    case 'now':
      return new Date().toISOString()
    case 'randomtext':
      return btoa(Math.random().toString()).substring(10, 5)
    case 'randomnumber':
      return Math.floor(Math.random() * 10000)
    default:
      return '{{' + type + '}}'
  }
}
export default defineComponent({
  setup() {
    const event = useLocalStorage<EventTypes>(
      'debug-event-name',
      EventTypes.POST_CREATE,
    )

    const payload = useLocalStorage<Partial<Record<EventTypes, string>>>(
      'debug-event',
      {},
    )
    const type = useLocalStorage<'web' | 'admin' | 'all'>(
      'debug-event-type',
      'web',
    )

    const value = usePropsValueToRef({
      value: payload.value[event.value] ?? '',
    })
    const editorRef = ref()
    watch(
      () => event.value,
      (eventName) => {
        monaco.editor.setValue(payload.value[eventName] || '')
      },
    )
    const monaco = useAsyncLoadMonaco(
      editorRef,
      value,
      (str) => {
        payload.value = {
          ...payload.value,
          [event.value]: str,
        }
      },
      { language: 'json' },
    )
    const handleSend = async () => {
      const replaceText =
        payload.value[event.value]?.replace(
          /(\{\{(.*?)\}\})/g,
          // @ts-ignore
          (match, p1, p2) => {
            return generateFakeData(p2)
          },
        ) ?? ''
      console.log(replaceText)

      RESTManager.api.debug.events.post({
        params: {
          type: type.value,
          event: event.value,
        },
        data: JSON.parse(replaceText),
      })
    }
    return () => (
      <ContentLayout>
        <TwoColGridLayout>
          <NGi span="12">
            <NForm>
              <NFormItem label="Type">
                <NSelect
                  tag
                  filterable
                  value={type.value}
                  onUpdateValue={(val) => void (type.value = val)}
                  options={['web', 'all', 'admin'].map((i) => ({
                    value: i,
                    label: i,
                  }))}
                ></NSelect>
              </NFormItem>
              <NFormItem label="Event">
                <NSelect
                  tag
                  filterable
                  value={event.value}
                  onUpdateValue={(val) => void (event.value = val)}
                  options={Object.keys(EventTypes).map((type) => ({
                    value: type,
                    label: type,
                  }))}
                ></NSelect>
              </NFormItem>
            </NForm>

            <div>
              <NButton type="primary" onClick={handleSend}>
                测试
              </NButton>
            </div>
          </NGi>
          <NGi span="24">
            <div class="h-[calc(100vh-20rem)] relative">
              <div ref={editorRef} class="h-full"></div>
            </div>
          </NGi>
        </TwoColGridLayout>
      </ContentLayout>
    )
  },
})
