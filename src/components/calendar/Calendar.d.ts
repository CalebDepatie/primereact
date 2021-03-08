import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';
export interface DateMetaData {
    day: number;
    month: number;
    year: number;
    otherMonth: boolean;
    today: boolean;
    selectable: boolean;
}

interface CalendarProps {
    id?: string;
    name?: string;
    value?: Date|Date[];
    viewDate?: Date;
    style?: object;
    className?: string;
    inline?: boolean;
    selectionMode?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    required?: boolean;
    readOnlyInput?: boolean;
    keepInvalid?: boolean;
    mask?: string;
    disabled?: boolean;
    tabIndex?: number;
    placeholder?: string;
    showIcon?: boolean;
    icon?: string;
    showOnFocus?: boolean;
    numberOfMonths?: number;
    view?: string;
    touchUI?: boolean;
    showTime?: boolean;
    timeOnly?: boolean;
    showSeconds?: boolean;
    showMillisec?: boolean;
    hourFormat?: string;
    stepHour?: number;
    stepMinute?: number;
    stepSecond?: number;
    stepMillisec?: number;
    shortYearCutoff?: string;
    hideOnDateTimeSelect?: boolean;
    showWeek?: boolean;
    locale?: string;
    dateFormat?: string;
    panelStyle?: object;
    panelClassName?: string;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    disabledDates?: Date[];
    disabledDays?: number[];
    minDate?: Date;
    maxDate?: Date;
    maxDateCount?: number;
    showOtherMonths?: boolean;
    selectOtherMonths?: boolean;
    showButtonBar?: boolean;
    todayButtonClassName?: string;
    clearButtonClassName?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    appendTo?: any;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    yearRange?: string;
    dateTemplate?(dateMeta:DateMetaData): React.ReactNode;
    headerTemplate?(): React.ReactNode;
    footerTemplate?(): React.ReactNode;
    onFocus?(event: Event): void;
    onBlur?(event: Event): void;
    onInput?(event: Event): void;
    onSelect?(e: {originalEvent: Event, value: Date}): void;
    onChange?(e: {originalEvent: Event, value: Date|Date[], target: {name: string, id: string, value: Date|Date[]}}): void;
    onTodayButtonClick?(event: Event): void;
    onClearButtonClick?(event: Event): void;
    onViewDateChange?(e: {originalEvent: Event, value: Date}): void;
}

export class Calendar extends React.Component<CalendarProps,any> {}
