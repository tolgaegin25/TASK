import { moduleMetadata, storiesOf } from '@storybook/angular';
import { AppComponent } from 'src/app/app.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { PricingAreaComponent } from 'src/app/pricing-area/pricing-area.component';
import { PricingComponent } from 'src/app/pricing/pricing.component';
import { TableComponent } from 'src/app/table/table.component';

storiesOf('Menu Component', module)
  .addDecorator(
    moduleMetadata({
      declarations: [MenuComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<app-menu></app-menu>`,
      props: {},
    };
  });

storiesOf('Pricing Component', module)
  .addDecorator(
    moduleMetadata({
      declarations: [PricingComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<app-pricing></app-pricing>`,
      props: {},
    };
  })
  .add('checked', () => {
    return {
      template: `<app-pricing ></app-pricing>`,
      props: {},
    };
  });

storiesOf('Pricing-Area Component', module)
  .addDecorator(
    moduleMetadata({
      declarations: [PricingAreaComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<app-pricing-area></app-pricing-area>`,
      props: {},
    };
  });
storiesOf('Table Component', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TableComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<app-table></app-table>`,
      props: {},
    };
  });
storiesOf('App Component', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AppComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<app-root></app-root>`,
      props: {},
    };
  });
