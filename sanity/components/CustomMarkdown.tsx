import {JSX, useMemo} from 'react'
import {MarkdownInput, type MarkdownInputProps} from 'sanity-plugin-markdown'

export function CustomMarkdown(props: JSX.IntrinsicAttributes & MarkdownInputProps) {
  const reactMdeProps: MarkdownInputProps['reactMdeProps'] = useMemo(() => {
    return {
      options: {
        toolbar: ['bold', 'italic', 'link', 'ordered-list', 'unordered-list'],
        minHeight: '30px',
        placeholder: 'Wpisz tutaj coś...',
      },
    }
  }, [])
  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />
}
