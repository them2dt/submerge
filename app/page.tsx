'use client';

import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Plus, Minus, Globe, DollarSign, TrendingUp, Calculator, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { subscriptions, countries, getCategoryColor, getCategoryName, type Subscription, type SubscriptionPlan, type Country } from '@/lib/subscriptions';

interface SelectedSubscription {
  subscription: Subscription;
  plan: SubscriptionPlan;
  billing: 'monthly' | 'yearly';
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState<SelectedSubscription[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['streaming', 'music', 'productivity', 'gaming', 'news', 'fitness', 'cloud'])
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const addSubscription = (subscription: Subscription, plan: SubscriptionPlan) => {
    if (!selectedSubscriptions.find(s => s.subscription.id === subscription.id && s.plan.id === plan.id)) {
      setSelectedSubscriptions([...selectedSubscriptions, { subscription, plan, billing: 'monthly' }]);
    }
  };

  const removeSubscription = (subscriptionId: string, planId: string) => {
    setSelectedSubscriptions(selectedSubscriptions.filter(s => 
      !(s.subscription.id === subscriptionId && s.plan.id === planId)
    ));
  };

  const toggleBilling = (subscriptionId: string, planId: string) => {
    setSelectedSubscriptions(selectedSubscriptions.map(s => 
      s.subscription.id === subscriptionId && s.plan.id === planId
        ? { ...s, billing: s.billing === 'monthly' ? 'yearly' : 'monthly' }
        : s
    ));
  };

  const totalMonthly = useMemo(() => {
    return selectedSubscriptions.reduce((total, { plan, billing }) => {
      const price = plan.pricing[selectedCountry.code];
      if (!price) return total;
      
      if (billing === 'monthly') {
        return total + price.monthly;
      } else {
        return total + (price.yearly || price.monthly * 12) / 12;
      }
    }, 0);
  }, [selectedSubscriptions, selectedCountry]);

  const totalYearly = totalMonthly * 12;

  const chartData = useMemo(() => {
    const categoryTotals = selectedSubscriptions.reduce((acc, { subscription, plan, billing }) => {
      const price = plan.pricing[selectedCountry.code];
      if (!price) return acc;
      
      const monthlyPrice = billing === 'monthly' 
        ? price.monthly 
        : (price.yearly || price.monthly * 12) / 12;
      
      acc[subscription.category] = (acc[subscription.category] || 0) + monthlyPrice;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryTotals).map(([category, value]) => ({
      name: getCategoryName(category),
      value: Number(value.toFixed(2)),
      color: getCategoryColor(category),
    }));
  }, [selectedSubscriptions, selectedCountry]);

  const groupedSubscriptions = useMemo(() => {
    return subscriptions.reduce((acc, subscription) => {
      if (!acc[subscription.category]) {
        acc[subscription.category] = [];
      }
      acc[subscription.category].push(subscription);
      return acc;
    }, {} as Record<string, Subscription[]>);
  }, []);

  // Calculate category stats
  const getCategoryStats = (category: string, subs: Subscription[]) => {
    const selectedCount = selectedSubscriptions.filter(s => s.subscription.category === category).length;
    const totalCount = subs.reduce((count, sub) => count + sub.plans.length, 0);
    const categoryTotal = selectedSubscriptions
      .filter(s => s.subscription.category === category)
      .reduce((total, { plan, billing }) => {
        const price = plan.pricing[selectedCountry.code];
        if (!price) return total;
        
        const monthlyPrice = billing === 'monthly' 
          ? price.monthly 
          : (price.yearly || price.monthly * 12) / 12;
        
        return total + monthlyPrice;
      }, 0);

    return { selectedCount, totalCount, categoryTotal };
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <motion.header 
        className="border-b border-gray-200 bg-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <motion.div 
              className="flex items-center space-x-3 min-w-0 flex-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 truncate">Submerge</h1>
                <p className="text-sm text-gray-600">Subscription Calculator</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3 flex-shrink-0"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <select 
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 min-w-0 max-w-[150px]"
                value={selectedCountry.code}
                onChange={(e) => setSelectedCountry(countries.find(c => c.code === e.target.value) || countries[0])}
              >
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 lg:gap-6">
          {/* Subscription Selection */}
          <motion.div 
            className="xl:col-span-3 space-y-4 min-w-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {Object.entries(groupedSubscriptions).map(([category, subs], categoryIndex) => {
              const isExpanded = expandedCategories.has(category);
              const stats = getCategoryStats(category, subs);

              return (
                <motion.div 
                  key={category} 
                  className="border border-gray-200 rounded-lg bg-white overflow-hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                >
                  <motion.div 
                    className="px-4 sm:px-6 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleCategory(category)}
                    whileHover={{ backgroundColor: "rgb(249 250 251)" }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between min-w-0">
                      <div className="flex items-center min-w-0 flex-1">
                        <motion.div 
                          className="flex items-center mr-4 flex-shrink-0"
                          animate={{ rotate: isExpanded ? 0 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 0 : -90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          </motion.div>
                        </motion.div>
                        <div 
                          className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: getCategoryColor(category) }}
                        />
                        <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                          {getCategoryName(category)}
                        </h2>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm flex-shrink-0 ml-4">
                        <span className="text-gray-600 whitespace-nowrap">
                          {stats.selectedCount}/{stats.totalCount}
                        </span>
                        {stats.categoryTotal > 0 && (
                          <motion.span 
                            className="font-semibold text-gray-900 whitespace-nowrap"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {selectedCountry.symbol}{stats.categoryTotal.toFixed(2)}/mo
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-6">
                          <div className="space-y-6">
                            {subs.map((subscription, subIndex) => (
                              <motion.div 
                                key={subscription.id} 
                                className="space-y-3"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: subIndex * 0.05 }}
                              >
                                <h4 className="font-medium text-gray-900 text-base border-b border-gray-100 pb-2 truncate">
                                  {subscription.name}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                                  {subscription.plans.map((plan, planIndex) => {
                                    const isSelected = selectedSubscriptions.find(s => 
                                      s.subscription.id === subscription.id && s.plan.id === plan.id
                                    );
                                    const pricing = plan.pricing[selectedCountry.code];
                                    
                                    return (
                                      <motion.div 
                                        key={plan.id}
                                        className={`border rounded-lg p-4 transition-all cursor-pointer min-w-0 ${ 
                                          isSelected 
                                            ? 'border-blue-500 bg-blue-50' 
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                        onClick={() => isSelected 
                                          ? removeSubscription(subscription.id, plan.id) 
                                          : addSubscription(subscription, plan)
                                        }
                                        initial={{ y: 5, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.2, delay: planIndex * 0.02 }}
                                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                        whileTap={{ scale: 0.98 }}
                                        layout
                                      >
                                        <div className="flex items-center justify-between mb-3 min-w-0">
                                          <div className="flex-1 min-w-0">
                                            <h5 className="font-medium text-gray-900 text-sm truncate">{plan.name}</h5>
                                          </div>
                                          <motion.div
                                            className="flex-shrink-0 ml-2"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                          >
                                            {isSelected ? (
                                              <Minus className="w-4 h-4 text-red-600" />
                                            ) : (
                                              <Plus className="w-4 h-4 text-gray-400" />
                                            )}
                                          </motion.div>
                                        </div>
                                        
                                        {pricing && (
                                          <div className="mb-3">
                                            <p className="text-base font-semibold text-gray-900 break-words">
                                              <span className="whitespace-nowrap">
                                                {selectedCountry.symbol}{pricing.monthly.toFixed(2)}
                                              </span>
                                              <span className="text-xs font-normal text-gray-500">/mo</span>
                                            </p>
                                            {pricing.yearly && (
                                              <p className="text-xs text-gray-600 break-words">
                                                <span className="whitespace-nowrap">
                                                  {selectedCountry.symbol}{pricing.yearly.toFixed(2)}/year
                                                </span>
                                              </p>
                                            )}
                                          </div>
                                        )}
                                        
                                        <AnimatePresence>
                                          {isSelected && (
                                            <motion.button
                                              initial={{ opacity: 0, height: 0 }}
                                              animate={{ opacity: 1, height: "auto" }}
                                              exit={{ opacity: 0, height: 0 }}
                                              transition={{ duration: 0.2 }}
                                              className="w-full mt-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-xs font-medium transition-colors text-gray-700"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                toggleBilling(subscription.id, plan.id);
                                              }}
                                              whileHover={{ backgroundColor: "rgb(229 231 235)" }}
                                              whileTap={{ scale: 0.98 }}
                                            >
                                              <span className="truncate block">
                                                {selectedSubscriptions.find(s => 
                                                  s.subscription.id === subscription.id && s.plan.id === plan.id
                                                )?.billing === 'monthly' ? 'Switch to Yearly' : 'Switch to Monthly'}
                                              </span>
                                            </motion.button>
                                          )}
                                        </AnimatePresence>
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Summary & Chart */}
          <motion.div 
            className="space-y-4 lg:space-y-6 min-w-0"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Total Summary */}
            <motion.div 
              className="border border-gray-200 rounded-lg bg-white p-4 sm:p-6"
              layout
            >
              <div className="flex items-center mb-4">
                <DollarSign className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-gray-900">Total Cost</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Monthly</p>
                  <motion.p 
                    className="text-2xl font-bold text-gray-900 break-words"
                    key={totalMonthly}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="whitespace-nowrap">
                      {selectedCountry.symbol}{totalMonthly.toFixed(2)}
                    </span>
                  </motion.p>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Yearly</p>
                  <motion.p 
                    className="text-lg font-semibold text-gray-700 break-words"
                    key={totalYearly}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="whitespace-nowrap">
                      {selectedCountry.symbol}{totalYearly.toFixed(2)}
                    </span>
                  </motion.p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <motion.p 
                    className="text-xs text-gray-600 flex items-center"
                    key={selectedSubscriptions.length}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingUp className="w-3 h-3 mr-1 flex-shrink-0" />
                    <span className="truncate">
                      {selectedSubscriptions.length} active subscription{selectedSubscriptions.length !== 1 ? 's' : ''}
                    </span>
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Donut Chart */}
            <AnimatePresence>
              {chartData.length > 0 && (
                <motion.div 
                  className="border border-gray-200 rounded-lg bg-white p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Breakdown</h3>
                  
                  <motion.div 
                    className="h-48 w-full overflow-hidden"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${selectedCountry.symbol}${Number(value).toFixed(2)}`, 'Monthly Cost']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </motion.div>
                  
                  <div className="space-y-2 mt-4">
                    {chartData.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center justify-between min-w-0"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <div className="flex items-center min-w-0 flex-1">
                          <div 
                            className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm font-medium text-gray-700 truncate">{item.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 flex-shrink-0 ml-2 whitespace-nowrap">
                          {selectedCountry.symbol}{item.value.toFixed(2)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Selected Subscriptions List */}
            <AnimatePresence>
              {selectedSubscriptions.length > 0 && (
                <motion.div 
                  className="border border-gray-200 rounded-lg bg-white p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Subscriptions</h3>
                  
                  <div className="space-y-2">
                    <AnimatePresence>
                      {selectedSubscriptions.map(({ subscription, plan, billing }, index) => {
                        const pricing = plan.pricing[selectedCountry.code];
                        const cost = billing === 'monthly' 
                          ? pricing?.monthly 
                          : (pricing?.yearly || pricing?.monthly * 12) / 12;
                        
                        return (
                          <motion.div 
                            key={`${subscription.id}-${plan.id}`} 
                            className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100 min-w-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                            layout
                          >
                            <div className="flex items-center min-w-0 flex-1">
                              <div className="mr-3 flex-shrink-0">
                                <div 
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: getCategoryColor(subscription.category) }}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-medium text-gray-900 text-sm truncate">
                                  {subscription.name} {plan.name}
                                </p>
                                <p className="text-xs text-gray-500 capitalize">{billing} billing</p>
                              </div>
                            </div>
                            <motion.p 
                              className="font-semibold text-gray-900 text-sm flex-shrink-0 ml-2 whitespace-nowrap"
                              key={cost}
                              initial={{ scale: 1.1 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {selectedCountry.symbol}{cost?.toFixed(2)}
                            </motion.p>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="border-t border-gray-200 bg-gray-50 py-8 mt-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Developed by{' '}
              <motion.a 
                href="https://maruthan.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 hover:text-blue-600 transition-colors underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                maruthan
              </motion.a>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
