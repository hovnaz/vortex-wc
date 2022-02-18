import { Injectable } from '@angular/core';
import { BaseTagModel, ComponentModel, LayoutModel } from "../model/component.model";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  component: ComponentModel = {
    header: {
      type: "component",
      content: [
        {
          content: []
        }
      ],
      interface: {
        parent: "body",
        count: 1,
      }
    }
  }
  widget: ComponentModel = {

  }
  baseTag: BaseTagModel = {
    link: {
      type: "baseTag",
      tag: "a",
      interface: {
        type: "but",
        text: true,
        in: {
          link: { count: 0, parent: true }
        }
      },
      utils: {
        attr: {
          href: { name: "href", value: "javascript:void(0)" }
        }
      }
    },
    button: {
      type: "baseTag",
      tag: "button",
      interface: {
        text: true,
        in: false,
      },
    },
    header: {
      type: "baseTag",
      tag: ["h1", "h2", "h3", "h4", "h5", "h6"],
      interface: {
        text: true,
        in: false,
      },
    },
    paragraph: {
      type: "baseTag",
      tag: ["p", "pre"],
      interface: {
        text: true,
        in: false,
      },
    },
    image: {
      type: "baseTag",
      tag: "!img",
      interface: {
        in: false
      },
      utils: {
        attr: {
          src: { name: "src", value: "https://fakeimg.pl/300" },
          alt: { name: "alt", value: "image" },
        }
      }
    },
    // form
    form: {
      type: "baseTag",
      tag: "form",
    },
    input: {
      type: "baseTag",
      tag: "!input",
      interface: {
        in: false
      },
      utils: {
        attr: {
          type: {
            name: "type",
            value: "text",
            list: ["text", "number", "password", "checkbox", "radio", "submit", "range", "file", "email", "date", "color"],
          }
        }
      }
    },
    textarea: {
      type: "baseTag",
      tag: "textarea",
      interface: {
        in: false
      },
    },
    label: {
      type: "baseTag",
      tag: "label",
      interface: {
        text: true,
        in: false
      },
    },
    select: {
      type: "baseTag",
      tag: "select",
      private: {
        child: {
          option: {
            type: "baseTag",
            tag: "option",
            interface: { in: false, text: true }
          }
        }
      },
      interface: {
        type: "only",
        in: { option: -1 }
      }
    },
    table: {
      type: "baseTag",
      tag: "table",
      private: {
        child: {
          thead: {
            type: "baseTag",
            tag: "thead",
            private: {
              child: {
                tr: {
                  type: "baseTag",
                  tag: "tr",
                  private: {
                    child: {
                      th: {
                        type: "baseTag",
                        tag: "th",
                        interface: { text: true, in: false }
                      }
                    }
                  },
                  interface: { type: "only", in: { th: -1 } }
                }
              }
            },
            interface: { type: "only", in: { tr: -1 } }
          },
          tbody: {
            type: "baseTag",
            tag: "tbody",
            private: {
              child: {
                tr: {
                  type: "baseTag",
                  tag: "tr",
                  private: {
                    child: {
                      td: {
                        type: "baseTag",
                        tag: "td",
                        interface: { text: true, in: false }
                      }
                    }
                  },
                  interface: { type: "only", in: { td: -1 } }
                }
              }
            },
            interface: { type: "only", in: { tr: -1 } }
          },
          tfoot: {
            type: "baseTag",
            tag: "tfoot",
            private: {
              child: {
                tr: {
                  type: "baseTag",
                  tag: "tr",
                  private: {
                    child: {
                      td: {
                        type: "baseTag",
                        tag: "td",
                        interface: { text: true, in: false }
                      }
                    }
                  },
                  interface: { type: "only", in: { td: -1 } }
                }
              }
            },
            interface: { type: "only", in: { tr: -1 } }
          },
        }
      },
      interface: {
        type: "only",
        in: {
          thead: 1,
          tbody: 1,
          tfoot: 1,
        }
      }
    },
    list: {
      type: "baseTag",
      tag: "ul",
      interface: {
        type: "only",
        in: { li: -1 }
      },
      private: {
        child: {
          li: {
            type:"baseTag",
            tag: "li",
            interface: {
              text: true,
              in: true
            }
          }
        }
      },
      utils: {
        attr: {
          type: {
            name: "type",
            value: "text",
            list: ["text", "number", "password", "checkbox", "radio", "submit", "range", "file", "email", "date", "color"],
          }
        }
      }
    },
    empty: {
      type: "baseTag",
      tag: "span",
      interface: { in: true, text: true }
    },
  }
  constructor() { }
}
