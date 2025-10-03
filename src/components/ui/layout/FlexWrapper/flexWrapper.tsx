import React from 'react';
import styles from './flexWrapper.module.scss';

interface FlexWrapperProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    flexDirection?: 'column' | 'row';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    gap?: string;
    rowGap?: string;
    columnGap?: string;
    maxWidth?: string;
    flexDirectionSP?: 'column' | 'row';
    alignItemsSP?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContentSP?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    gapSP?: string;
    rowGapSP?: string;
    columnGapSP?: string;
    maxWidthSP?: string;
    width?: string;
    widthSP?: string;
    height?: 'max'
    flexShrink?: '0' | '';
    position?: 'sticky' | 'absolute' | 'relative' | 'fixed';
    top?: '180' | '';
    padding?: '4-16' | '0-16' | '4-8';
    backgroundColor?: 'blue_green_3' | 'gray_2';
    minHeight?: '24' | '109';
    minWidth?: '100' | '160';
    marginTop?: '7' | '17';
    as?: 'div' | 'span' | 'ul';
}

const FlexWrapper: React.FC<FlexWrapperProps> = ({
    id,
    children,
    className,
    flexDirection = 'row',
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    flexWrap = 'nowrap',
    gap,
    rowGap,
    columnGap,
    maxWidth,
    flexDirectionSP = '',
    alignItemsSP = '',
    justifyContentSP = '',
    gapSP,
    rowGapSP,
    columnGapSP,
    maxWidthSP,
    width,
    widthSP,
    height,
    position,
    top,
    flexShrink,
    padding,
    backgroundColor,
    minHeight,
    minWidth,
    marginTop,
    as = 'div',
}) => {
    const Tag = as;
    const flexClass = [
        styles.flex,
        className ? styles[className] : '',
        styles[`flex-direction-${flexDirection}`],
        styles[`align-items-${alignItems}`],
        styles[`justify-content-${justifyContent}`],
        styles[`flex-wrap-${flexWrap}`],
        gap ? styles[`gap-${gap}`] : '',
        rowGap ? styles[`row-gap-${rowGap}`] : '',
        columnGap ? styles[`column-gap-${columnGap}`] : '',
        maxWidth ? styles[`max-width-${maxWidth}`] : '',
        flexDirectionSP ? styles[`flex-direction-sp-${flexDirectionSP}`] : '',
        alignItemsSP ? styles[`align-items-sp-${alignItemsSP}`] : '',
        justifyContentSP ? styles[`justify-content-sp-${justifyContentSP}`] : '',
        gapSP ? styles[`gap-SP-${gapSP}`] : '',
        rowGapSP ? styles[`row-gap-SP-${rowGap}`] : '',
        columnGapSP ? styles[`column-gap-SP-${columnGap}`] : '',
        maxWidthSP ? styles[`max-width-sp-${maxWidthSP}`] : '',
        width ? styles[`width-${width}`] : '',
        widthSP ? styles[`width-sp-${widthSP}`] : '',
        height ? styles[`height-${height}`] : '',
        flexShrink ? styles[`flex-shrink-${flexShrink}`] : '',
        position ? styles[`position-${position}`] : '',
        top ? styles[`top-${top}`] : '',
        padding ? styles[`padding-${padding}`] : '',
        backgroundColor ? styles[`background-color-${backgroundColor}`] : '',
        minHeight ? styles[`min-height-${minHeight}`] : '',
        minWidth ? styles[`min-width-${minWidth}`] : '',
        marginTop ? styles[`margin-top-${marginTop}`] : '',
    ]
        .filter(Boolean)
        .join(' ');
    return (
            <Tag id={id} className={flexClass}>{children}</Tag>
        );
};

export default FlexWrapper;
