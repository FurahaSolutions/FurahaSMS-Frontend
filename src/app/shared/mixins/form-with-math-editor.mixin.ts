import { BehaviorSubject } from 'rxjs';
import { formMixin } from './form.mixin';

export const formWithMathEditorMixin = () =>

  class extends formMixin() {
    tinyMCEConfig = {
      ['forced_root_block']: '',
      branding: false,
      height: 210,
      ['base_url']: '/tinymce',
      ['paste_data_images']: true,
      menubar: false,
      plugins: [
        'mathjax',
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],

      mathjax: {
        lib: '/mathjax/es5/tex-mml-chtml.js',
        symbols: {start: '\\\(', end: '\\\)'},
        className: 'math-tex',
      },
      toolbar:
        'mathjax | \
        undo redo | formatselect | bold italic backcolor | image | \
                       alignleft aligncenter alignright alignjustify | \
                       bullist numlist outdent indent | removeformat | help'
    };
    editorInitializedSubject$ = new BehaviorSubject<boolean>(false);
    editorInitializedAction$ = this.editorInitializedSubject$.asObservable();

    initializeEditor = () => {
      this.editorInitializedSubject$.next(true);
    };
  };
