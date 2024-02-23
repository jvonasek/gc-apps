import {
  Amount,
  Asset,
  BigNumber,
  ONE,
  SYSTEM_ASSET_ID,
  bnum,
  scale,
} from '@galacticcouncil/sdk';

export const MIN_NATIVE_AMOUNT = '500000000000000';

export function formatAmount(amount: BigNumber, decimals: number): string {
  return amount
    .shiftedBy(-1 * decimals)
    .toNumber()
    .toString();
}

/* export function formatAmount(
  amount: BigNumber,
  decimals: number,
  outDecimals?: number,
): string {
  const formatted = amount.shiftedBy(-1 * decimals);
  if (outDecimals) {
    return formatted.toNumber().toFixed(outDecimals).toString();
  }
  return formatted.toString();
} */

export function humanizeAmount(amount: string | number): string {
  const amountNo = Number(amount);

  if (!Number.isFinite(amountNo)) {
    return null;
  }

  if (Number.isInteger(amountNo)) {
    const formattedNo = new Intl.NumberFormat('en-US').format(amountNo);
    return formattedNo.replaceAll(',', ' ');
  }

  let maxSignDigits: number = 4;
  if (amountNo > 1) {
    const intPartLen = Math.ceil(Math.log10(Number(amountNo) + 1));
    maxSignDigits = maxSignDigits + intPartLen;
  }
  const formattedNo = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: maxSignDigits,
  }).format(amountNo);
  return formattedNo.replaceAll(',', ' ');
}

export function exchange(
  rates: Map<string, Amount>,
  asset: Asset,
  amount: string | number,
): string {
  if (rates.size === 0) {
    return null;
  }

  const rate = rates.get(asset.id) || {
    amount: scale(ONE, asset.decimals),
    decimals: asset.decimals,
  };

  const result = rate.amount.multipliedBy(amount);
  return formatAmount(result, rate.decimals);
}

export function exchangeNative(
  rates: Map<string, Amount>,
  asset: Asset,
  amountNative: string | number,
): BigNumber {
  if (rates.size === 0) {
    return null;
  }

  if (SYSTEM_ASSET_ID === asset.id) {
    return toBn(amountNative, 0);
  }

  const rate = rates.get(asset.id);
  const result = bnum(amountNative).div(rate.amount);
  return scale(result, asset.decimals).decimalPlaces(0, 1);
}

export function toBn(amount: string | number, decimals: number): BigNumber {
  const result = scale(bnum(amount), decimals);
  return result.decimalPlaces(0, 1);
}
