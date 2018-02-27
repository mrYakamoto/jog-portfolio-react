import css from 'styled-jsx/css'
import { colors } from 'variables'

export default css`
.grid-container {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  max-width: 62.5rem;
  margin: 0 auto;
}
.grid-container.fluid {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  max-width: 100%;
  margin: 0 auto;
}
.grid-container.full {
  padding-right: 0;
  padding-left: 0;
  max-width: 100%;
  margin: 0 auto;
}

.grid-x {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}

.cell {
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  min-height: 0px;
  min-width: 0px;
  width: 100%;
}
.cell.auto {
    -ms-flex: 1 1 0px;
    flex: 1 1 0px;
}

.cell.shrink {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.grid-x > .auto {
  width: auto;
}

.grid-x > .shrink {
  width: auto;
}

.grid-x > .small-shrink, .grid-x > .small-full, .grid-x > .small-1, .grid-x > .small-2, .grid-x > .small-3, .grid-x > .small-4, .grid-x > .small-5, .grid-x > .small-6, .grid-x > .small-7, .grid-x > .small-8, .grid-x > .small-9, .grid-x > .small-10, .grid-x > .small-11, .grid-x > .small-12 {
  -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }

@media print, screen and (min-width: 40em) {
  .grid-x > .medium-shrink, .grid-x > .medium-full, .grid-x > .medium-1, .grid-x > .medium-2, .grid-x > .medium-3, .grid-x > .medium-4, .grid-x > .medium-5, .grid-x > .medium-6, .grid-x > .medium-7, .grid-x > .medium-8, .grid-x > .medium-9, .grid-x > .medium-10, .grid-x > .medium-11, .grid-x > .medium-12 {
    -ms-flex-preferred-size: auto;
        flex-basis: auto; } }

@media print, screen and (min-width: 64em) {
  .grid-x > .large-shrink, .grid-x > .large-full, .grid-x > .large-1, .grid-x > .large-2, .grid-x > .large-3, .grid-x > .large-4, .grid-x > .large-5, .grid-x > .large-6, .grid-x > .large-7, .grid-x > .large-8, .grid-x > .large-9, .grid-x > .large-10, .grid-x > .large-11, .grid-x > .large-12 {
    -ms-flex-preferred-size: auto;
        flex-basis: auto; } }

.grid-x > .small-1 {
  width: 8.33333%; }

.grid-x > .small-2 {
  width: 16.66667%; }

.grid-x > .small-3 {
  width: 25%; }

.grid-x > .small-4 {
  width: 33.33333%; }

.grid-x > .small-5 {
  width: 41.66667%; }

.grid-x > .small-6 {
  width: 50%; }

.grid-x > .small-7 {
  width: 58.33333%; }

.grid-x > .small-8 {
  width: 66.66667%; }

.grid-x > .small-9 {
  width: 75%; }

.grid-x > .small-10 {
  width: 83.33333%; }

.grid-x > .small-11 {
  width: 91.66667%; }

.grid-x > .small-12 {
  width: 100%; }

@media print, screen and (min-width: 40em) {
  .grid-x > .medium-auto {
    -ms-flex: 1 1 0px;
        flex: 1 1 0px;
    width: auto; }
  .grid-x > .medium-shrink {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto; }
  .grid-x > .medium-1 {
    width: 8.33333%; }
  .grid-x > .medium-2 {
    width: 16.66667%; }
  .grid-x > .medium-3 {
    width: 25%; }
  .grid-x > .medium-4 {
    width: 33.33333%; }
  .grid-x > .medium-5 {
    width: 41.66667%; }
  .grid-x > .medium-6 {
    width: 50%; }
  .grid-x > .medium-7 {
    width: 58.33333%; }
  .grid-x > .medium-8 {
    width: 66.66667%; }
  .grid-x > .medium-9 {
    width: 75%; }
  .grid-x > .medium-10 {
    width: 83.33333%; }
  .grid-x > .medium-11 {
    width: 91.66667%; }
  .grid-x > .medium-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .grid-x > .large-auto {
    -ms-flex: 1 1 0px;
        flex: 1 1 0px;
    width: auto; }
  .grid-x > .large-shrink {
    -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    width: auto; }
  .grid-x > .large-1 {
    width: 8.33333%; }
  .grid-x > .large-2 {
    width: 16.66667%; }
  .grid-x > .large-3 {
    width: 25%; }
  .grid-x > .large-4 {
    width: 33.33333%; }
  .grid-x > .large-5 {
    width: 41.66667%; }
  .grid-x > .large-6 {
    width: 50%; }
  .grid-x > .large-7 {
    width: 58.33333%; }
  .grid-x > .large-8 {
    width: 66.66667%; }
  .grid-x > .large-9 {
    width: 75%; }
  .grid-x > .large-10 {
    width: 83.33333%; }
  .grid-x > .large-11 {
    width: 91.66667%; }
  .grid-x > .large-12 {
    width: 100%; } }

.grid-margin-x:not(.grid-x) > .cell {
  width: auto; }

.grid-margin-y:not(.grid-y) > .cell {
  height: auto; }

.grid-margin-x {
  margin-left: -0.9375rem;
  margin-right: -0.9375rem; }
  .grid-margin-x > .cell {
    width: calc(100% - 1.875rem);
    margin-left: 0.9375rem;
    margin-right: 0.9375rem; }
  .grid-margin-x > .auto {
    width: auto; }
  .grid-margin-x > .shrink {
    width: auto; }
  .grid-margin-x > .small-1 {
    width: calc(8.33333% - 1.875rem); }
  .grid-margin-x > .small-2 {
    width: calc(16.66667% - 1.875rem); }
  .grid-margin-x > .small-3 {
    width: calc(25% - 1.875rem); }
  .grid-margin-x > .small-4 {
    width: calc(33.33333% - 1.875rem); }
  .grid-margin-x > .small-5 {
    width: calc(41.66667% - 1.875rem); }
  .grid-margin-x > .small-6 {
    width: calc(50% - 1.875rem); }
  .grid-margin-x > .small-7 {
    width: calc(58.33333% - 1.875rem); }
  .grid-margin-x > .small-8 {
    width: calc(66.66667% - 1.875rem); }
  .grid-margin-x > .small-9 {
    width: calc(75% - 1.875rem); }
  .grid-margin-x > .small-10 {
    width: calc(83.33333% - 1.875rem); }
  .grid-margin-x > .small-11 {
    width: calc(91.66667% - 1.875rem); }
  .grid-margin-x > .small-12 {
    width: calc(100% - 1.875rem); }
  @media print, screen and (min-width: 40em) {
    .grid-margin-x > .medium-auto {
      width: auto; }
    .grid-margin-x > .medium-shrink {
      width: auto; }
    .grid-margin-x > .medium-1 {
      width: calc(8.33333% - 1.875rem); }
    .grid-margin-x > .medium-2 {
      width: calc(16.66667% - 1.875rem); }
    .grid-margin-x > .medium-3 {
      width: calc(25% - 1.875rem); }
    .grid-margin-x > .medium-4 {
      width: calc(33.33333% - 1.875rem); }
    .grid-margin-x > .medium-5 {
      width: calc(41.66667% - 1.875rem); }
    .grid-margin-x > .medium-6 {
      width: calc(50% - 1.875rem); }
    .grid-margin-x > .medium-7 {
      width: calc(58.33333% - 1.875rem); }
    .grid-margin-x > .medium-8 {
      width: calc(66.66667% - 1.875rem); }
    .grid-margin-x > .medium-9 {
      width: calc(75% - 1.875rem); }
    .grid-margin-x > .medium-10 {
      width: calc(83.33333% - 1.875rem); }
    .grid-margin-x > .medium-11 {
      width: calc(91.66667% - 1.875rem); }
    .grid-margin-x > .medium-12 {
      width: calc(100% - 1.875rem); } }
  @media print, screen and (min-width: 64em) {
    .grid-margin-x > .large-auto {
      width: auto; }
    .grid-margin-x > .large-shrink {
      width: auto; }
    .grid-margin-x > .large-1 {
      width: calc(8.33333% - 1.875rem); }
    .grid-margin-x > .large-2 {
      width: calc(16.66667% - 1.875rem); }
    .grid-margin-x > .large-3 {
      width: calc(25% - 1.875rem); }
    .grid-margin-x > .large-4 {
      width: calc(33.33333% - 1.875rem); }
    .grid-margin-x > .large-5 {
      width: calc(41.66667% - 1.875rem); }
    .grid-margin-x > .large-6 {
      width: calc(50% - 1.875rem); }
    .grid-margin-x > .large-7 {
      width: calc(58.33333% - 1.875rem); }
    .grid-margin-x > .large-8 {
      width: calc(66.66667% - 1.875rem); }
    .grid-margin-x > .large-9 {
      width: calc(75% - 1.875rem); }
    .grid-margin-x > .large-10 {
      width: calc(83.33333% - 1.875rem); }
    .grid-margin-x > .large-11 {
      width: calc(91.66667% - 1.875rem); }
    .grid-margin-x > .large-12 {
      width: calc(100% - 1.875rem); } }

.grid-padding-x .grid-padding-x {
  margin-right: -0.9375rem;
  margin-left: -0.9375rem; }

.grid-container:not(.full) > .grid-padding-x {
  margin-right: -0.9375rem;
  margin-left: -0.9375rem; }

.grid-padding-x > .cell {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem; }

.small-up-1 > .cell {
  width: 100%; }

.small-up-2 > .cell {
  width: 50%; }

.small-up-3 > .cell {
  width: 33.33333%; }

.small-up-4 > .cell {
  width: 25%; }

.small-up-5 > .cell {
  width: 20%; }

.small-up-6 > .cell {
  width: 16.66667%; }

.small-up-7 > .cell {
  width: 14.28571%; }

.small-up-8 > .cell {
  width: 12.5%; }

@media print, screen and (min-width: 40em) {
  .medium-up-1 > .cell {
    width: 100%; }
  .medium-up-2 > .cell {
    width: 50%; }
  .medium-up-3 > .cell {
    width: 33.33333%; }
  .medium-up-4 > .cell {
    width: 25%; }
  .medium-up-5 > .cell {
    width: 20%; }
  .medium-up-6 > .cell {
    width: 16.66667%; }
  .medium-up-7 > .cell {
    width: 14.28571%; }
  .medium-up-8 > .cell {
    width: 12.5%; } }

@media print, screen and (min-width: 64em) {
  .large-up-1 > .cell {
    width: 100%; }
  .large-up-2 > .cell {
    width: 50%; }
  .large-up-3 > .cell {
    width: 33.33333%; }
  .large-up-4 > .cell {
    width: 25%; }
  .large-up-5 > .cell {
    width: 20%; }
  .large-up-6 > .cell {
    width: 16.66667%; }
  .large-up-7 > .cell {
    width: 14.28571%; }
  .large-up-8 > .cell {
    width: 12.5%; } }

.grid-margin-x.small-up-1 > .cell {
  width: calc(100% - 1.875rem); }

.grid-margin-x.small-up-2 > .cell {
  width: calc(50% - 1.875rem); }

.grid-margin-x.small-up-3 > .cell {
  width: calc(33.33333% - 1.875rem); }

.grid-margin-x.small-up-4 > .cell {
  width: calc(25% - 1.875rem); }

.grid-margin-x.small-up-5 > .cell {
  width: calc(20% - 1.875rem); }

.grid-margin-x.small-up-6 > .cell {
  width: calc(16.66667% - 1.875rem); }

.grid-margin-x.small-up-7 > .cell {
  width: calc(14.28571% - 1.875rem); }

.grid-margin-x.small-up-8 > .cell {
  width: calc(12.5% - 1.875rem); }

@media print, screen and (min-width: 40em) {
  .grid-margin-x.medium-up-1 > .cell {
    width: calc(100% - 1.875rem); }
  .grid-margin-x.medium-up-2 > .cell {
    width: calc(50% - 1.875rem); }
  .grid-margin-x.medium-up-3 > .cell {
    width: calc(33.33333% - 1.875rem); }
  .grid-margin-x.medium-up-4 > .cell {
    width: calc(25% - 1.875rem); }
  .grid-margin-x.medium-up-5 > .cell {
    width: calc(20% - 1.875rem); }
  .grid-margin-x.medium-up-6 > .cell {
    width: calc(16.66667% - 1.875rem); }
  .grid-margin-x.medium-up-7 > .cell {
    width: calc(14.28571% - 1.875rem); }
  .grid-margin-x.medium-up-8 > .cell {
    width: calc(12.5% - 1.875rem); } }

@media print, screen and (min-width: 64em) {
  .grid-margin-x.large-up-1 > .cell {
    width: calc(100% - 1.875rem); }
  .grid-margin-x.large-up-2 > .cell {
    width: calc(50% - 1.875rem); }
  .grid-margin-x.large-up-3 > .cell {
    width: calc(33.33333% - 1.875rem); }
  .grid-margin-x.large-up-4 > .cell {
    width: calc(25% - 1.875rem); }
  .grid-margin-x.large-up-5 > .cell {
    width: calc(20% - 1.875rem); }
  .grid-margin-x.large-up-6 > .cell {
    width: calc(16.66667% - 1.875rem); }
  .grid-margin-x.large-up-7 > .cell {
    width: calc(14.28571% - 1.875rem); }
  .grid-margin-x.large-up-8 > .cell {
    width: calc(12.5% - 1.875rem); } }

.small-margin-collapse {
  margin-right: 0;
  margin-left: 0; }
  .small-margin-collapse > .cell {
    margin-right: 0;
    margin-left: 0; }
  .small-margin-collapse > .small-1 {
    width: 8.33333%; }
  .small-margin-collapse > .small-2 {
    width: 16.66667%; }
  .small-margin-collapse > .small-3 {
    width: 25%; }
  .small-margin-collapse > .small-4 {
    width: 33.33333%; }
  .small-margin-collapse > .small-5 {
    width: 41.66667%; }
  .small-margin-collapse > .small-6 {
    width: 50%; }
  .small-margin-collapse > .small-7 {
    width: 58.33333%; }
  .small-margin-collapse > .small-8 {
    width: 66.66667%; }
  .small-margin-collapse > .small-9 {
    width: 75%; }
  .small-margin-collapse > .small-10 {
    width: 83.33333%; }
  .small-margin-collapse > .small-11 {
    width: 91.66667%; }
  .small-margin-collapse > .small-12 {
    width: 100%; }
  @media print, screen and (min-width: 40em) {
    .small-margin-collapse > .medium-1 {
      width: 8.33333%; }
    .small-margin-collapse > .medium-2 {
      width: 16.66667%; }
    .small-margin-collapse > .medium-3 {
      width: 25%; }
    .small-margin-collapse > .medium-4 {
      width: 33.33333%; }
    .small-margin-collapse > .medium-5 {
      width: 41.66667%; }
    .small-margin-collapse > .medium-6 {
      width: 50%; }
    .small-margin-collapse > .medium-7 {
      width: 58.33333%; }
    .small-margin-collapse > .medium-8 {
      width: 66.66667%; }
    .small-margin-collapse > .medium-9 {
      width: 75%; }
    .small-margin-collapse > .medium-10 {
      width: 83.33333%; }
    .small-margin-collapse > .medium-11 {
      width: 91.66667%; }
    .small-margin-collapse > .medium-12 {
      width: 100%; } }
  @media print, screen and (min-width: 64em) {
    .small-margin-collapse > .large-1 {
      width: 8.33333%; }
    .small-margin-collapse > .large-2 {
      width: 16.66667%; }
    .small-margin-collapse > .large-3 {
      width: 25%; }
    .small-margin-collapse > .large-4 {
      width: 33.33333%; }
    .small-margin-collapse > .large-5 {
      width: 41.66667%; }
    .small-margin-collapse > .large-6 {
      width: 50%; }
    .small-margin-collapse > .large-7 {
      width: 58.33333%; }
    .small-margin-collapse > .large-8 {
      width: 66.66667%; }
    .small-margin-collapse > .large-9 {
      width: 75%; }
    .small-margin-collapse > .large-10 {
      width: 83.33333%; }
    .small-margin-collapse > .large-11 {
      width: 91.66667%; }
    .small-margin-collapse > .large-12 {
      width: 100%; } }

.small-padding-collapse {
  margin-right: 0;
  margin-left: 0; }
  .small-padding-collapse > .cell {
    padding-right: 0;
    padding-left: 0; }

@media print, screen and (min-width: 40em) {
  .medium-margin-collapse {
    margin-right: 0;
    margin-left: 0; }
    .medium-margin-collapse > .cell {
      margin-right: 0;
      margin-left: 0; } }

@media print, screen and (min-width: 40em) {
  .medium-margin-collapse > .small-1 {
    width: 8.33333%; }
  .medium-margin-collapse > .small-2 {
    width: 16.66667%; }
  .medium-margin-collapse > .small-3 {
    width: 25%; }
  .medium-margin-collapse > .small-4 {
    width: 33.33333%; }
  .medium-margin-collapse > .small-5 {
    width: 41.66667%; }
  .medium-margin-collapse > .small-6 {
    width: 50%; }
  .medium-margin-collapse > .small-7 {
    width: 58.33333%; }
  .medium-margin-collapse > .small-8 {
    width: 66.66667%; }
  .medium-margin-collapse > .small-9 {
    width: 75%; }
  .medium-margin-collapse > .small-10 {
    width: 83.33333%; }
  .medium-margin-collapse > .small-11 {
    width: 91.66667%; }
  .medium-margin-collapse > .small-12 {
    width: 100%; } }

@media print, screen and (min-width: 40em) {
  .medium-margin-collapse > .medium-1 {
    width: 8.33333%; }
  .medium-margin-collapse > .medium-2 {
    width: 16.66667%; }
  .medium-margin-collapse > .medium-3 {
    width: 25%; }
  .medium-margin-collapse > .medium-4 {
    width: 33.33333%; }
  .medium-margin-collapse > .medium-5 {
    width: 41.66667%; }
  .medium-margin-collapse > .medium-6 {
    width: 50%; }
  .medium-margin-collapse > .medium-7 {
    width: 58.33333%; }
  .medium-margin-collapse > .medium-8 {
    width: 66.66667%; }
  .medium-margin-collapse > .medium-9 {
    width: 75%; }
  .medium-margin-collapse > .medium-10 {
    width: 83.33333%; }
  .medium-margin-collapse > .medium-11 {
    width: 91.66667%; }
  .medium-margin-collapse > .medium-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .medium-margin-collapse > .large-1 {
    width: 8.33333%; }
  .medium-margin-collapse > .large-2 {
    width: 16.66667%; }
  .medium-margin-collapse > .large-3 {
    width: 25%; }
  .medium-margin-collapse > .large-4 {
    width: 33.33333%; }
  .medium-margin-collapse > .large-5 {
    width: 41.66667%; }
  .medium-margin-collapse > .large-6 {
    width: 50%; }
  .medium-margin-collapse > .large-7 {
    width: 58.33333%; }
  .medium-margin-collapse > .large-8 {
    width: 66.66667%; }
  .medium-margin-collapse > .large-9 {
    width: 75%; }
  .medium-margin-collapse > .large-10 {
    width: 83.33333%; }
  .medium-margin-collapse > .large-11 {
    width: 91.66667%; }
  .medium-margin-collapse > .large-12 {
    width: 100%; } }

@media print, screen and (min-width: 40em) {
  .medium-padding-collapse {
    margin-right: 0;
    margin-left: 0; }
    .medium-padding-collapse > .cell {
      padding-right: 0;
      padding-left: 0; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse {
    margin-right: 0;
    margin-left: 0; }
    .large-margin-collapse > .cell {
      margin-right: 0;
      margin-left: 0; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse > .small-1 {
    width: 8.33333%; }
  .large-margin-collapse > .small-2 {
    width: 16.66667%; }
  .large-margin-collapse > .small-3 {
    width: 25%; }
  .large-margin-collapse > .small-4 {
    width: 33.33333%; }
  .large-margin-collapse > .small-5 {
    width: 41.66667%; }
  .large-margin-collapse > .small-6 {
    width: 50%; }
  .large-margin-collapse > .small-7 {
    width: 58.33333%; }
  .large-margin-collapse > .small-8 {
    width: 66.66667%; }
  .large-margin-collapse > .small-9 {
    width: 75%; }
  .large-margin-collapse > .small-10 {
    width: 83.33333%; }
  .large-margin-collapse > .small-11 {
    width: 91.66667%; }
  .large-margin-collapse > .small-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse > .medium-1 {
    width: 8.33333%; }
  .large-margin-collapse > .medium-2 {
    width: 16.66667%; }
  .large-margin-collapse > .medium-3 {
    width: 25%; }
  .large-margin-collapse > .medium-4 {
    width: 33.33333%; }
  .large-margin-collapse > .medium-5 {
    width: 41.66667%; }
  .large-margin-collapse > .medium-6 {
    width: 50%; }
  .large-margin-collapse > .medium-7 {
    width: 58.33333%; }
  .large-margin-collapse > .medium-8 {
    width: 66.66667%; }
  .large-margin-collapse > .medium-9 {
    width: 75%; }
  .large-margin-collapse > .medium-10 {
    width: 83.33333%; }
  .large-margin-collapse > .medium-11 {
    width: 91.66667%; }
  .large-margin-collapse > .medium-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse > .large-1 {
    width: 8.33333%; }
  .large-margin-collapse > .large-2 {
    width: 16.66667%; }
  .large-margin-collapse > .large-3 {
    width: 25%; }
  .large-margin-collapse > .large-4 {
    width: 33.33333%; }
  .large-margin-collapse > .large-5 {
    width: 41.66667%; }
  .large-margin-collapse > .large-6 {
    width: 50%; }
  .large-margin-collapse > .large-7 {
    width: 58.33333%; }
  .large-margin-collapse > .large-8 {
    width: 66.66667%; }
  .large-margin-collapse > .large-9 {
    width: 75%; }
  .large-margin-collapse > .large-10 {
    width: 83.33333%; }
  .large-margin-collapse > .large-11 {
    width: 91.66667%; }
  .large-margin-collapse > .large-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .large-padding-collapse {
    margin-right: 0;
    margin-left: 0; }
    .large-padding-collapse > .cell {
      padding-right: 0;
      padding-left: 0; } }

.small-offset-0 {
  margin-left: 0%; }

.grid-margin-x > .small-offset-0 {
  margin-left: calc(0% + 0.9375rem); }

.small-offset-1 {
  margin-left: 8.33333%; }

.grid-margin-x > .small-offset-1 {
  margin-left: calc(8.33333% + 0.9375rem); }

.small-offset-2 {
  margin-left: 16.66667%; }

.grid-margin-x > .small-offset-2 {
  margin-left: calc(16.66667% + 0.9375rem); }

.small-offset-3 {
  margin-left: 25%; }

.grid-margin-x > .small-offset-3 {
  margin-left: calc(25% + 0.9375rem); }

.small-offset-4 {
  margin-left: 33.33333%; }

.grid-margin-x > .small-offset-4 {
  margin-left: calc(33.33333% + 0.9375rem); }

.small-offset-5 {
  margin-left: 41.66667%; }

.grid-margin-x > .small-offset-5 {
  margin-left: calc(41.66667% + 0.9375rem); }

.small-offset-6 {
  margin-left: 50%; }

.grid-margin-x > .small-offset-6 {
  margin-left: calc(50% + 0.9375rem); }

.small-offset-7 {
  margin-left: 58.33333%; }

.grid-margin-x > .small-offset-7 {
  margin-left: calc(58.33333% + 0.9375rem); }

.small-offset-8 {
  margin-left: 66.66667%; }

.grid-margin-x > .small-offset-8 {
  margin-left: calc(66.66667% + 0.9375rem); }

.small-offset-9 {
  margin-left: 75%; }

.grid-margin-x > .small-offset-9 {
  margin-left: calc(75% + 0.9375rem); }

.small-offset-10 {
  margin-left: 83.33333%; }

.grid-margin-x > .small-offset-10 {
  margin-left: calc(83.33333% + 0.9375rem); }

.small-offset-11 {
  margin-left: 91.66667%; }

.grid-margin-x > .small-offset-11 {
  margin-left: calc(91.66667% + 0.9375rem); }

@media print, screen and (min-width: 40em) {
  .medium-offset-0 {
    margin-left: 0%; }
  .grid-margin-x > .medium-offset-0 {
    margin-left: calc(0% + 0.9375rem); }
  .medium-offset-1 {
    margin-left: 8.33333%; }
  .grid-margin-x > .medium-offset-1 {
    margin-left: calc(8.33333% + 0.9375rem); }
  .medium-offset-2 {
    margin-left: 16.66667%; }
  .grid-margin-x > .medium-offset-2 {
    margin-left: calc(16.66667% + 0.9375rem); }
  .medium-offset-3 {
    margin-left: 25%; }
  .grid-margin-x > .medium-offset-3 {
    margin-left: calc(25% + 0.9375rem); }
  .medium-offset-4 {
    margin-left: 33.33333%; }
  .grid-margin-x > .medium-offset-4 {
    margin-left: calc(33.33333% + 0.9375rem); }
  .medium-offset-5 {
    margin-left: 41.66667%; }
  .grid-margin-x > .medium-offset-5 {
    margin-left: calc(41.66667% + 0.9375rem); }
  .medium-offset-6 {
    margin-left: 50%; }
  .grid-margin-x > .medium-offset-6 {
    margin-left: calc(50% + 0.9375rem); }
  .medium-offset-7 {
    margin-left: 58.33333%; }
  .grid-margin-x > .medium-offset-7 {
    margin-left: calc(58.33333% + 0.9375rem); }
  .medium-offset-8 {
    margin-left: 66.66667%; }
  .grid-margin-x > .medium-offset-8 {
    margin-left: calc(66.66667% + 0.9375rem); }
  .medium-offset-9 {
    margin-left: 75%; }
  .grid-margin-x > .medium-offset-9 {
    margin-left: calc(75% + 0.9375rem); }
  .medium-offset-10 {
    margin-left: 83.33333%; }
  .grid-margin-x > .medium-offset-10 {
    margin-left: calc(83.33333% + 0.9375rem); }
  .medium-offset-11 {
    margin-left: 91.66667%; }
  .grid-margin-x > .medium-offset-11 {
    margin-left: calc(91.66667% + 0.9375rem); } }

@media print, screen and (min-width: 64em) {
  .large-offset-0 {
    margin-left: 0%; }
  .grid-margin-x > .large-offset-0 {
    margin-left: calc(0% + 0.9375rem); }
  .large-offset-1 {
    margin-left: 8.33333%; }
  .grid-margin-x > .large-offset-1 {
    margin-left: calc(8.33333% + 0.9375rem); }
  .large-offset-2 {
    margin-left: 16.66667%; }
  .grid-margin-x > .large-offset-2 {
    margin-left: calc(16.66667% + 0.9375rem); }
  .large-offset-3 {
    margin-left: 25%; }
  .grid-margin-x > .large-offset-3 {
    margin-left: calc(25% + 0.9375rem); }
  .large-offset-4 {
    margin-left: 33.33333%; }
  .grid-margin-x > .large-offset-4 {
    margin-left: calc(33.33333% + 0.9375rem); }
  .large-offset-5 {
    margin-left: 41.66667%; }
  .grid-margin-x > .large-offset-5 {
    margin-left: calc(41.66667% + 0.9375rem); }
  .large-offset-6 {
    margin-left: 50%; }
  .grid-margin-x > .large-offset-6 {
    margin-left: calc(50% + 0.9375rem); }
  .large-offset-7 {
    margin-left: 58.33333%; }
  .grid-margin-x > .large-offset-7 {
    margin-left: calc(58.33333% + 0.9375rem); }
  .large-offset-8 {
    margin-left: 66.66667%; }
  .grid-margin-x > .large-offset-8 {
    margin-left: calc(66.66667% + 0.9375rem); }
  .large-offset-9 {
    margin-left: 75%; }
  .grid-margin-x > .large-offset-9 {
    margin-left: calc(75% + 0.9375rem); }
  .large-offset-10 {
    margin-left: 83.33333%; }
  .grid-margin-x > .large-offset-10 {
    margin-left: calc(83.33333% + 0.9375rem); }
  .large-offset-11 {
    margin-left: 91.66667%; }
  .grid-margin-x > .large-offset-11 {
    margin-left: calc(91.66667% + 0.9375rem); } }

.grid-y {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column nowrap;
      flex-flow: column nowrap; }
  .grid-y > .cell {
    width: auto; }
  .grid-y > .auto {
    height: auto; }
  .grid-y > .shrink {
    height: auto; }
  .grid-y > .small-shrink, .grid-y > .small-full, .grid-y > .small-1, .grid-y > .small-2, .grid-y > .small-3, .grid-y > .small-4, .grid-y > .small-5, .grid-y > .small-6, .grid-y > .small-7, .grid-y > .small-8, .grid-y > .small-9, .grid-y > .small-10, .grid-y > .small-11, .grid-y > .small-12 {
    -ms-flex-preferred-size: auto;
        flex-basis: auto; }
  @media print, screen and (min-width: 40em) {
    .grid-y > .medium-shrink, .grid-y > .medium-full, .grid-y > .medium-1, .grid-y > .medium-2, .grid-y > .medium-3, .grid-y > .medium-4, .grid-y > .medium-5, .grid-y > .medium-6, .grid-y > .medium-7, .grid-y > .medium-8, .grid-y > .medium-9, .grid-y > .medium-10, .grid-y > .medium-11, .grid-y > .medium-12 {
      -ms-flex-preferred-size: auto;
          flex-basis: auto; } }
  @media print, screen and (min-width: 64em) {
    .grid-y > .large-shrink, .grid-y > .large-full, .grid-y > .large-1, .grid-y > .large-2, .grid-y > .large-3, .grid-y > .large-4, .grid-y > .large-5, .grid-y > .large-6, .grid-y > .large-7, .grid-y > .large-8, .grid-y > .large-9, .grid-y > .large-10, .grid-y > .large-11, .grid-y > .large-12 {
      -ms-flex-preferred-size: auto;
          flex-basis: auto; } }
  .grid-y > .small-1 {
    height: 8.33333%; }
  .grid-y > .small-2 {
    height: 16.66667%; }
  .grid-y > .small-3 {
    height: 25%; }
  .grid-y > .small-4 {
    height: 33.33333%; }
  .grid-y > .small-5 {
    height: 41.66667%; }
  .grid-y > .small-6 {
    height: 50%; }
  .grid-y > .small-7 {
    height: 58.33333%; }
  .grid-y > .small-8 {
    height: 66.66667%; }
  .grid-y > .small-9 {
    height: 75%; }
  .grid-y > .small-10 {
    height: 83.33333%; }
  .grid-y > .small-11 {
    height: 91.66667%; }
  .grid-y > .small-12 {
    height: 100%; }
  @media print, screen and (min-width: 40em) {
    .grid-y > .medium-auto {
      -ms-flex: 1 1 0px;
          flex: 1 1 0px;
      height: auto; }
    .grid-y > .medium-shrink {
      height: auto; }
    .grid-y > .medium-1 {
      height: 8.33333%; }
    .grid-y > .medium-2 {
      height: 16.66667%; }
    .grid-y > .medium-3 {
      height: 25%; }
    .grid-y > .medium-4 {
      height: 33.33333%; }
    .grid-y > .medium-5 {
      height: 41.66667%; }
    .grid-y > .medium-6 {
      height: 50%; }
    .grid-y > .medium-7 {
      height: 58.33333%; }
    .grid-y > .medium-8 {
      height: 66.66667%; }
    .grid-y > .medium-9 {
      height: 75%; }
    .grid-y > .medium-10 {
      height: 83.33333%; }
    .grid-y > .medium-11 {
      height: 91.66667%; }
    .grid-y > .medium-12 {
      height: 100%; } }
  @media print, screen and (min-width: 64em) {
    .grid-y > .large-auto {
      -ms-flex: 1 1 0px;
          flex: 1 1 0px;
      height: auto; }
    .grid-y > .large-shrink {
      height: auto; }
    .grid-y > .large-1 {
      height: 8.33333%; }
    .grid-y > .large-2 {
      height: 16.66667%; }
    .grid-y > .large-3 {
      height: 25%; }
    .grid-y > .large-4 {
      height: 33.33333%; }
    .grid-y > .large-5 {
      height: 41.66667%; }
    .grid-y > .large-6 {
      height: 50%; }
    .grid-y > .large-7 {
      height: 58.33333%; }
    .grid-y > .large-8 {
      height: 66.66667%; }
    .grid-y > .large-9 {
      height: 75%; }
    .grid-y > .large-10 {
      height: 83.33333%; }
    .grid-y > .large-11 {
      height: 91.66667%; }
    .grid-y > .large-12 {
      height: 100%; } }

.grid-padding-y .grid-padding-y {
  margin-top: -0.9375rem;
  margin-bottom: -0.9375rem; }

.grid-padding-y > .cell {
  padding-top: 0.9375rem;
  padding-bottom: 0.9375rem; }

.grid-margin-y {
  margin-top: -0.9375rem;
  margin-bottom: -0.9375rem; }
  .grid-margin-y > .cell {
    height: calc(100% - 1.875rem);
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem; }
  .grid-margin-y > .auto {
    height: auto; }
  .grid-margin-y > .shrink {
    height: auto; }
  .grid-margin-y > .small-1 {
    height: calc(8.33333% - 1.875rem); }
  .grid-margin-y > .small-2 {
    height: calc(16.66667% - 1.875rem); }
  .grid-margin-y > .small-3 {
    height: calc(25% - 1.875rem); }
  .grid-margin-y > .small-4 {
    height: calc(33.33333% - 1.875rem); }
  .grid-margin-y > .small-5 {
    height: calc(41.66667% - 1.875rem); }
  .grid-margin-y > .small-6 {
    height: calc(50% - 1.875rem); }
  .grid-margin-y > .small-7 {
    height: calc(58.33333% - 1.875rem); }
  .grid-margin-y > .small-8 {
    height: calc(66.66667% - 1.875rem); }
  .grid-margin-y > .small-9 {
    height: calc(75% - 1.875rem); }
  .grid-margin-y > .small-10 {
    height: calc(83.33333% - 1.875rem); }
  .grid-margin-y > .small-11 {
    height: calc(91.66667% - 1.875rem); }
  .grid-margin-y > .small-12 {
    height: calc(100% - 1.875rem); }
  @media print, screen and (min-width: 40em) {
    .grid-margin-y > .medium-auto {
      height: auto; }
    .grid-margin-y > .medium-shrink {
      height: auto; }
    .grid-margin-y > .medium-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .medium-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .medium-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .medium-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .medium-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .medium-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .medium-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .medium-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .medium-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .medium-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .medium-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .medium-12 {
      height: calc(100% - 1.875rem); } }
  @media print, screen and (min-width: 64em) {
    .grid-margin-y > .large-auto {
      height: auto; }
    .grid-margin-y > .large-shrink {
      height: auto; }
    .grid-margin-y > .large-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .large-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .large-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .large-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .large-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .large-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .large-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .large-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .large-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .large-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .large-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .large-12 {
      height: calc(100% - 1.875rem); } }

.grid-frame {
  overflow: hidden;
  position: relative;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -ms-flex-align: stretch;
      align-items: stretch;
  width: 100vw; }

.cell .grid-frame {
  width: 100%; }

.cell-block {
  overflow-x: auto;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-stype: -ms-autohiding-scrollbar; }

.cell-block-y {
  overflow-y: auto;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-stype: -ms-autohiding-scrollbar; }

.cell-block-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  max-height: 100%; }
  .cell-block-container > .grid-x {
    max-height: 100%;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap; }

@media print, screen and (min-width: 40em) {
  .medium-grid-frame {
    overflow: hidden;
    position: relative;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-align: stretch;
        align-items: stretch;
    width: 100vw; }
  .cell .medium-grid-frame {
    width: 100%; }
  .medium-cell-block {
    overflow-x: auto;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-stype: -ms-autohiding-scrollbar; }
  .medium-cell-block-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    max-height: 100%; }
    .medium-cell-block-container > .grid-x {
      max-height: 100%;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; }
  .medium-cell-block-y {
    overflow-y: auto;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-stype: -ms-autohiding-scrollbar; } }

@media print, screen and (min-width: 64em) {
  .large-grid-frame {
    overflow: hidden;
    position: relative;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-align: stretch;
        align-items: stretch;
    width: 100vw; }
  .cell .large-grid-frame {
    width: 100%; }
  .large-cell-block {
    overflow-x: auto;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-stype: -ms-autohiding-scrollbar; }
  .large-cell-block-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    max-height: 100%; }
    .large-cell-block-container > .grid-x {
      max-height: 100%;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; }
  .large-cell-block-y {
    overflow-y: auto;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-stype: -ms-autohiding-scrollbar; } }

.grid-y.grid-frame {
  width: auto;
  overflow: hidden;
  position: relative;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -ms-flex-align: stretch;
      align-items: stretch;
  height: 100vh; }

@media print, screen and (min-width: 40em) {
  .grid-y.medium-grid-frame {
    width: auto;
    overflow: hidden;
    position: relative;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-align: stretch;
        align-items: stretch;
    height: 100vh; } }

@media print, screen and (min-width: 64em) {
  .grid-y.large-grid-frame {
    width: auto;
    overflow: hidden;
    position: relative;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-align: stretch;
        align-items: stretch;
    height: 100vh; } }

.cell .grid-y.grid-frame {
  height: 100%; }

@media print, screen and (min-width: 40em) {
  .cell .grid-y.medium-grid-frame {
    height: 100%; } }

@media print, screen and (min-width: 64em) {
  .cell .grid-y.large-grid-frame {
    height: 100%; } }

.grid-margin-y {
  margin-top: -0.9375rem;
  margin-bottom: -0.9375rem; }
  .grid-margin-y > .cell {
    height: calc(100% - 1.875rem);
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem; }
  .grid-margin-y > .auto {
    height: auto; }
  .grid-margin-y > .shrink {
    height: auto; }
  .grid-margin-y > .small-1 {
    height: calc(8.33333% - 1.875rem); }
  .grid-margin-y > .small-2 {
    height: calc(16.66667% - 1.875rem); }
  .grid-margin-y > .small-3 {
    height: calc(25% - 1.875rem); }
  .grid-margin-y > .small-4 {
    height: calc(33.33333% - 1.875rem); }
  .grid-margin-y > .small-5 {
    height: calc(41.66667% - 1.875rem); }
  .grid-margin-y > .small-6 {
    height: calc(50% - 1.875rem); }
  .grid-margin-y > .small-7 {
    height: calc(58.33333% - 1.875rem); }
  .grid-margin-y > .small-8 {
    height: calc(66.66667% - 1.875rem); }
  .grid-margin-y > .small-9 {
    height: calc(75% - 1.875rem); }
  .grid-margin-y > .small-10 {
    height: calc(83.33333% - 1.875rem); }
  .grid-margin-y > .small-11 {
    height: calc(91.66667% - 1.875rem); }
  .grid-margin-y > .small-12 {
    height: calc(100% - 1.875rem); }
  @media print, screen and (min-width: 40em) {
    .grid-margin-y > .medium-auto {
      height: auto; }
    .grid-margin-y > .medium-shrink {
      height: auto; }
    .grid-margin-y > .medium-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .medium-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .medium-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .medium-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .medium-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .medium-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .medium-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .medium-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .medium-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .medium-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .medium-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .medium-12 {
      height: calc(100% - 1.875rem); } }
  @media print, screen and (min-width: 64em) {
    .grid-margin-y > .large-auto {
      height: auto; }
    .grid-margin-y > .large-shrink {
      height: auto; }
    .grid-margin-y > .large-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .large-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .large-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .large-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .large-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .large-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .large-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .large-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .large-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .large-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .large-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .large-12 {
      height: calc(100% - 1.875rem); } }

.grid-frame.grid-margin-y {
  height: calc(100vh + 1.875rem); }

@media print, screen and (min-width: 40em) {
  .grid-margin-y.medium-grid-frame {
    height: calc(100vh + 1.875rem); } }

@media print, screen and (min-width: 64em) {
  .grid-margin-y.large-grid-frame {
    height: calc(100vh + 1.875rem); } }

.align-right {
  -ms-flex-pack: end;
      justify-content: flex-end; }

.align-center {
  -ms-flex-pack: center;
      justify-content: center; }

.align-justify {
  -ms-flex-pack: justify;
      justify-content: space-between; }

.align-spaced {
  -ms-flex-pack: distribute;
      justify-content: space-around; }

.align-right.vertical.menu > li > a {
  -ms-flex-pack: end;
      justify-content: flex-end; }

.align-center.vertical.menu > li > a {
  -ms-flex-pack: center;
      justify-content: center; }

.align-top {
  -ms-flex-align: start;
      align-items: flex-start; }

.align-self-top {
  -ms-flex-item-align: start;
      align-self: flex-start; }

.align-bottom {
  -ms-flex-align: end;
      align-items: flex-end; }

.align-self-bottom {
  -ms-flex-item-align: end;
      align-self: flex-end; }

.align-middle {
  -ms-flex-align: center;
      align-items: center; }

.align-self-middle {
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center; }

.align-stretch {
  -ms-flex-align: stretch;
      align-items: stretch; }

.align-self-stretch {
  -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch; }

.align-center-middle {
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-line-pack: center;
      align-content: center; }

.small-order-1 {
  -ms-flex-order: 1;
      order: 1; }

.small-order-2 {
  -ms-flex-order: 2;
      order: 2; }

.small-order-3 {
  -ms-flex-order: 3;
      order: 3; }

.small-order-4 {
  -ms-flex-order: 4;
      order: 4; }

.small-order-5 {
  -ms-flex-order: 5;
      order: 5; }

.small-order-6 {
  -ms-flex-order: 6;
      order: 6; }

@media print, screen and (min-width: 40em) {
  .medium-order-1 {
    -ms-flex-order: 1;
        order: 1; }
  .medium-order-2 {
    -ms-flex-order: 2;
        order: 2; }
  .medium-order-3 {
    -ms-flex-order: 3;
        order: 3; }
  .medium-order-4 {
    -ms-flex-order: 4;
        order: 4; }
  .medium-order-5 {
    -ms-flex-order: 5;
        order: 5; }
  .medium-order-6 {
    -ms-flex-order: 6;
        order: 6; } }

@media print, screen and (min-width: 64em) {
  .large-order-1 {
    -ms-flex-order: 1;
        order: 1; }
  .large-order-2 {
    -ms-flex-order: 2;
        order: 2; }
  .large-order-3 {
    -ms-flex-order: 3;
        order: 3; }
  .large-order-4 {
    -ms-flex-order: 4;
        order: 4; }
  .large-order-5 {
    -ms-flex-order: 5;
        order: 5; }
  .large-order-6 {
    -ms-flex-order: 6;
        order: 6; } }

.flex-container {
  display: -ms-flexbox;
  display: flex; }

.flex-child-auto {
  -ms-flex: 1 1 auto;
      flex: 1 1 auto; }

.flex-child-grow {
  -ms-flex: 1 0 auto;
      flex: 1 0 auto; }

.flex-child-shrink {
  -ms-flex: 0 1 auto;
      flex: 0 1 auto; }

.flex-dir-row {
  -ms-flex-direction: row;
      flex-direction: row; }

.flex-dir-row-reverse {
  -ms-flex-direction: row-reverse;
      flex-direction: row-reverse; }

.flex-dir-column {
  -ms-flex-direction: column;
      flex-direction: column; }

.flex-dir-column-reverse {
  -ms-flex-direction: column-reverse;
      flex-direction: column-reverse; }

@media print, screen and (min-width: 40em) {
  .medium-flex-container {
    display: -ms-flexbox;
    display: flex; }
  .medium-flex-child-auto {
    -ms-flex: 1 1 auto;
        flex: 1 1 auto; }
  .medium-flex-child-grow {
    -ms-flex: 1 0 auto;
        flex: 1 0 auto; }
  .medium-flex-child-shrink {
    -ms-flex: 0 1 auto;
        flex: 0 1 auto; }
  .medium-flex-dir-row {
    -ms-flex-direction: row;
        flex-direction: row; }
  .medium-flex-dir-row-reverse {
    -ms-flex-direction: row-reverse;
        flex-direction: row-reverse; }
  .medium-flex-dir-column {
    -ms-flex-direction: column;
        flex-direction: column; }
  .medium-flex-dir-column-reverse {
    -ms-flex-direction: column-reverse;
        flex-direction: column-reverse; } }

@media print, screen and (min-width: 64em) {
  .large-flex-container {
    display: -ms-flexbox;
    display: flex; }
  .large-flex-child-auto {
    -ms-flex: 1 1 auto;
        flex: 1 1 auto; }
  .large-flex-child-grow {
    -ms-flex: 1 0 auto;
        flex: 1 0 auto; }
  .large-flex-child-shrink {
    -ms-flex: 0 1 auto;
        flex: 0 1 auto; }
  .large-flex-dir-row {
    -ms-flex-direction: row;
        flex-direction: row; }
  .large-flex-dir-row-reverse {
    -ms-flex-direction: row-reverse;
        flex-direction: row-reverse; }
  .large-flex-dir-column {
    -ms-flex-direction: column;
        flex-direction: column; }
  .large-flex-dir-column-reverse {
    -ms-flex-direction: column-reverse;
        flex-direction: column-reverse; }}
`