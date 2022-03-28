
import * as React from 'react';
import { Contract } from '@ethersproject/contracts';

import useActiveWeb3React from './use-active-web3-react';

import {
  getHRC20Contract,
  getCakeContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getProfileContract,
  getIfoV1Contract,
  getIfoV2Contract,
  getLotteryContract,
  getBarContract,
  gethMochiAbi,
  getLotteryTicketContract,
  getMasterchefContract,
  getPointCenterIfoContract,
  getSousChefContract,
  getClaimRefundContract,
  getTradingCompetitionContract,
  getEasterNftContract,
  getErc721Contract,
  getFoxVaultContract,
  getPredictionsContract,
  getChainlinkOracleContract,
  getVaultChefContract,
  getAutofoxContract,
  getZapperContract,
  getTokenContract,
  getFactoryV1Contract,
  getMigratorV2Contract,
  getExchangeV1Contract,
  getWONEContract,
  getArgentWalletDetectorContract,
  getENSRegistrarContract,
  getENSResolverContract,
  getBytes32TokenContract,
  getPairContract,
  getMulticallContract,
  getMerkleDistributorContract,
  getUniContract,
  getGovTokenContract,
  getGovernanceContract,
  getPitContract,
  getPitBreederContract,
  getStakingContract,
  getMasterBreederContract,
  getBondingContract, getSocksControllerContract
} from './helpers/contract-helpers';
import {useWeb3React} from "@web3-react/core";

/**
 * Helper hooks to get specific contracts (by ABI)
 */

const useIfoV1Contract = (address: string): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getIfoV1Contract(address, library.getSigner()), [address, library]);
};

const useIfoV2Contract = (address: string): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getIfoV2Contract(address, library.getSigner()), [address, library]);
};

const useHRC20Contract = (address: string): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getHRC20Contract(address, library.getSigner()), [address, library]);
};

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */

const useERC721 = (address: string): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getErc721Contract(address, library.getSigner()), [address, library]);
};

const useCake = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getCakeContract(library.getSigner()), [library]);
};

const useBunnyFactory = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getBunnyFactoryContract(library.getSigner()), [library]);
};

const usePancakeRabbits = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getPancakeRabbitContract(library.getSigner()), [library]);
};

const useProfile = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getProfileContract(library.getSigner()), [library]);
};

const useLottery = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getLotteryContract(library.getSigner()), [library]);
};

const useBar = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getBarContract(library.getSigner()), [library]);
};

const useMochi = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => gethMochiAbi(library.getSigner()), [library]);
};

const useLotteryTicket = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getLotteryTicketContract(library.getSigner()), [library]);
};

const useMasterchef = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getMasterchefContract(library.getSigner()), [library]);
};

const useVaultchef = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getVaultChefContract(library.getSigner()), [library]);
};

const useZapperContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getZapperContract(library.getSigner()), [library]);
};

const useSousChef = (id: number): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getSousChefContract(id, library.getSigner()), [id, library]);
};

const usePointCenterIfoContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getPointCenterIfoContract(library.getSigner()), [library]);
};

const useBunnySpecialContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getBunnySpecialContract(library.getSigner()), [library]);
};

const useClaimRefundContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getClaimRefundContract(library.getSigner()), [library]);
};

const useTradingCompetitionContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getTradingCompetitionContract(library.getSigner()), [library]);
};

const useEasterNftContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getEasterNftContract(library.getSigner()), [library]);
};

const useFoxVaultContract = (): Contract => {
  const {
    account,
    library
  } = useWeb3React();
  // This hook is slightly different from others
  // Calls were failing if unconnected user goes to farm auction page
  // Using library instead of library.getSigner() fixes the problem for unconnected users
  // However, this fix is not ideal, it currently has following behavior:
  // - If you visit the home page coming from some other page there are no errors in console
  // (unconnected or connected)
  // - If you go directly to the home page
  //   - as unconnected user you don't see any console errors
  //   - as connected user you see `unknown account #0 (operation="getAddress", code=UNSUPPORTED_OPERATION, ...` errors
  //     the functionality of the page is not affected, data is loading fine and you can interact with the contract
  //
  // Similar behavior was also noticed on the pools page

  return React.useMemo(() => getFoxVaultContract(library.getSigner()), [library, account]);
};

const usePredictionsContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getPredictionsContract(library.getSigner()), [library]);
};

const useChainlinkOracleContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getChainlinkOracleContract(library.getSigner()), [library]);
};

const useAutofoxContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getAutofoxContract(library.getSigner()), [library]);
};

const useTokenContract = (address: string): Contract => {
  const { library } = useActiveWeb3React();
  return React.useMemo(() => getTokenContract(address, library.getSigner()), [library]);
};

const useFactoryV1Contract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getFactoryV1Contract(library.getSigner()), [library]);
}

const useMigratorV2Contract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getMigratorV2Contract(library.getSigner()), [library]);
}

const useExchangeV1Contract = (address?: string): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getExchangeV1Contract(address, library.getSigner()), [library]);
};

const useWONEContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getWONEContract(library.getSigner()), [library]);
};

const useArgentWalletDetectorContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getArgentWalletDetectorContract(library.getSigner()), [library]);
};

export const useENSRegistrarContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getENSRegistrarContract(library.getSigner()), [library]);
};

export const useENSResolverContract = (address: string): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getENSResolverContract(address, library.getSigner()), [library]);
};

const useBytes32TokenContract = (address?: string): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getBytes32TokenContract(address, library.getSigner()), [library]);
};

const usePairContract = (address?: string): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getPairContract(address, library.getSigner()), [library]);};

const useMulticallContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getMulticallContract(library.getSigner()), [library]);
};

const useMerkleDistributorContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getMerkleDistributorContract(library.getSigner()), [library]);
};

const useGovernanceContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getGovernanceContract(library.getSigner()), [library]);};

const useUniContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getUniContract(library.getSigner()), [library]);};

const useGovTokenContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getGovTokenContract(library.getSigner()), [library]);};

const usePitContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getPitContract(library.getSigner()), [library]);
};

const usePitBreederContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getPitBreederContract(library.getSigner()), [library]);
};

function useStakingContract(address?: string): Contract | null {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getStakingContract(address, library.getSigner()), [library]);
}

const useMasterBreederContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getMasterBreederContract(library.getSigner()), [library]);
};

const useBondingContract = (address: string): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getBondingContract(address, library.getSigner()), [library]);};

const useSocksController = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getSocksControllerContract(library.getSigner()), [library]);
};

export {
  useIfoV1Contract,
  useIfoV2Contract,
  useHRC20Contract,
  useERC721,
  useCake,
  useBunnyFactory,
  usePancakeRabbits,
  useProfile,
  useLottery,
  useBar,
  useMochi,
  useLotteryTicket,
  useMasterchef,
  useVaultchef,
  useZapperContract,
  useSousChef,
  usePointCenterIfoContract,
  useBunnySpecialContract,
  useClaimRefundContract,
  useTradingCompetitionContract,
  useEasterNftContract,
  useFoxVaultContract,
  usePredictionsContract,
  useChainlinkOracleContract,
  useAutofoxContract,
  useTokenContract
};
