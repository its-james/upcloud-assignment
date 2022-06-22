import css from 'styled-jsx/css'

export const styles = css`
@import 'color';
  .Server__Container {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  .Server__State {
    height: 20px;
    width: 20px;
    background: color(ui, yellow);
    border-radius: 3px;

    &[data-state="started"] { background: color(ui, green); }
    &[data-state="stopped"] { background: color(ui, red); }
  }

  .Server__Title {

  }

  .Server__Hostname {
    color: color(grey, base)
  }
`